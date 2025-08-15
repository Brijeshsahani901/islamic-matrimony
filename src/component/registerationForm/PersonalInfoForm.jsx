"use client"
import React, { useState, forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useMutation } from "@tanstack/react-query";
import { personalInfoUpdated } from "@/api/profile.api";

const PersonalInfoForm = forwardRef(({ onNext ,setLoading,initialValues  }, ref) => {
const [formData, setFormData] = useState({
  first_name: initialValues?.first_name || "",
  last_name: initialValues?.last_name || "",
  date_of_birth: initialValues?.date_of_birth || "",
  gender: initialValues?.gender || "",
  about_me: initialValues?.about_me || "",
  expectations: initialValues?.expectations || "",
  health_conditions: initialValues?.health_conditions || "",
});


  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: personalInfoUpdated,
     onMutate: () => setLoading(true),
    onSuccess: (data) => {
      console.log(data)
       setLoading(false)
      onNext(formData);
    },
    onError: (error) => {
       setLoading(false)
      console.error("API error:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    submit() {
      if (!validateForm()) return;
      mutation.mutate(formData);
    },
  }));

  return (
    <form className="bg-white mt-2 p-6 rounded-md shadow max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-lg font-semibold mb-1">Personal Info</h3>
      <p className="text-sm text-gray-500 mb-6">
        Tell us about yourself to help us find your perfect match
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {[
          { name: "first_name", label: "First Name" },
          { name: "last_name", label: "Last Name" },
          { name: "date_of_birth", label: "Date of Birth", type: "date" },
        ].map(({ name, label, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              {label} *
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2 border-gray-300"
            />
            {errors[name] && (
              <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Gender *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full border rounded px-3 py-2 border-gray-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-xs text-red-500 mt-1">{errors.gender}</p>
          )}
        </div>

        {[
          {
            name: "about_me",
            label: "About Me",
            placeholder:
              "We refrain from allowing detailed descriptions...",
            rows: 3,
          },
          {
            name: "expectations",
            label: "Expectations",
            placeholder: "What do you want in an ideal partner?",
            rows: 3,
          },
          {
            name: "health_conditions",
            label: "Health Conditions",
            placeholder: "Mention any health conditions if applicable",
            rows: 2,
          },
        ].map(({ name, label, placeholder, rows }) => (
          <div className="col-span-2" key={name}>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              {label} *
            </label>
            <textarea
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2 border-gray-300"
              rows={rows}
              placeholder={placeholder}
            />
            {errors[name] && (
              <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
            )}
          </div>
        ))}
      </div>

      {mutation.isLoading && (
        <p className="text-center text-red-600 mt-3">Submitting...</p>
      )}
    </form>
  );
});

export default PersonalInfoForm;
