"use client";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useMutation } from "@tanstack/react-query";
import { familyInfoUpdated } from "@/api/profile.api";

const FamilyBackgroundForm = forwardRef(({ onNext,setLoading ,initialValues}, ref) => {
  const [formData, setFormData] = useState({
    marital_status: "",
    children: "",
    want_children: "",
    nationality: "",
    mother_tongue: "",
    languages_known: "",
    country: "",
    city: "",
...initialValues
  });

  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: familyInfoUpdated,
     onMutate: () => setLoading(true),
    onSuccess: () => {
       setLoading(false)
      onNext(formData);
    },
    onError: (error) => {
       setLoading(false)
      console.error("API Error:", error);
      // Optionally display toast
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const requiredFields = [
      "marital_status",
      "children",
      "want_children",
      "nationality",
      "mother_tongue",
      "country",
      "city",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required.";
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
    <div className="w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-1">
          <svg
            className="mr-2 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            width={24}
            height={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25a5.25 5.25 0 0110.492-2.221 5.25 5.25 0 0110.492 2.221M21 8.25a5.25 5.25 0 11-10.491 2.221A5.25 5.25 0 011.008 8.25M12 21.75c-2.485 0-4.5-1.567-4.5-3.5S9.515 14.75 12 14.75s4.5 1.567 4.5 3.5-2.015 3.5-4.5 3.5z"
            />
          </svg>
          Family & Background
        </h2>
        <p className="text-gray-500 mb-6">Tell us about your family and background</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Select Fields */}
            {[
              {
                name: "marital_status",
                label: "Marital Status",
                options: ["Single", "Married", "Divorced", "Widowed"],
              },
              {
                name: "children",
                label: "Do You Have Children?",
                options: ["Yes", "No", "Prefer Not to Say"],
              },
              {
                name: "want_children",
                label: "Want Children?",
                options: ["Yes", "No", "Not Sure"],
              },
              {
                name: "nationality",
                label: "Nationality",
                options: ["American", "Canadian", "British", "Other"],
              },
              {
                name: "mother_tongue",
                label: "Mother Tongue",
                options: ["English", "Arabic", "Urdu", "Other"],
              },
            ].map(({ name, label, options }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-900 mb-1">
                  {label} <span className="text-red-600">*</span>
                </label>
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                >
                  <option value="" disabled>Select {label}</option>
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                {errors[name] && (
                  <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            {/* Input Fields */}
            <div>
              <label htmlFor="languages_known" className="block text-sm font-medium text-gray-900 mb-1">
                Languages Known
              </label>
              <input
                type="text"
                name="languages_known"
                id="languages_known"
                value={formData.languages_known}
                onChange={handleChange}
                placeholder="e.g., English, Arabic, Urdu"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>

            {["country", "city"].map((name) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-900 mb-1">
                  {name.charAt(0).toUpperCase() + name.slice(1)} <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
                {errors[name] && (
                  <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            ))}
          </div>

          {mutation.isLoading && (
            <p className="text-center text-red-600 mt-4">Submitting...</p>
          )}
        </form>
      </div>
    </div>
  );
});

export default FamilyBackgroundForm;
