"use client";
import { useState, forwardRef, useImperativeHandle } from "react";
import { useMutation } from "@tanstack/react-query";
import { religiousInfoUpdated } from "@/api/profile.api";

const ReligiousInfoForm = forwardRef(({ onNext,setLoading,initialValues }, ref) => {
  const [formData, setFormData] = useState({
    is_sunni_muslims: "",
    is_revert_muslim: "",
    prayer_frequency: "",
    quran_reading: "",
    beard: "",
    hijab: "",
    ...initialValues
  });

  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: religiousInfoUpdated,
     onMutate: () => setLoading(true),
    onSuccess: () => {
       setLoading(false)
      onNext(formData);
    },
    onError: (error) => {
       setLoading(false)
      console.error("API error:", error);
      // Optionally show error toast or message
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const requiredFields = [
      "is_sunni_muslims",
      "is_revert_muslim",
      "prayer_frequency",
      "quran_reading",
      "hijab",
      "beard",
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
    <div className="w-2xl">
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
          Religious Info
        </h2>
        <p className="text-gray-500 mb-6">Share your religious preferences and practices</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "is_sunni_muslims",
                label: "Are you a Sunni Muslim?",
                options: ["Yes", "No", "Prefer Not to Say"],
              },
              {
                name: "is_revert_muslim",
                label: "Are You a Revert Muslim?",
                options: ["Yes", "No", "Prefer Not to Say"],
              },
              {
                name: "prayer_frequency",
                label: "Prayer Frequency",
                options: ["Rarely", "Sometimes", "Regularly", "Always"],
              },
              {
                name: "quran_reading",
                label: "Quran Reading",
                options: ["Daily", "Weekly", "Occasionally", "Never"],
              },
              {
                name: "hijab",
                label: "Hijab",
                options: ["Wear Hijab", "Occasionally", "Do Not Wear"],
              },
              {
                name: "beard",
                label: "Beard",
                options: ["Keep Beard", "Trimmed", "Clean Shaven"],
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
                  required
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select {label}
                  </option>
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
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

export default ReligiousInfoForm;
