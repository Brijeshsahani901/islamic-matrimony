"use client";

import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { careerEducationUpdated } from "@/api/profile.api";
import toast from "react-hot-toast";

const CareerForm = forwardRef(
  ({ initialData = {}, onNext, setLoading }, ref) => {
    const [formData, setFormData] = useState({
      education_level: "",
      occupation: "",
      annual_income: "",
      work_location: "",
      ...initialData,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }, []);

    const mutation = useMutation({
      mutationFn: careerEducationUpdated,
      onMutate: () => setLoading(true),
      onSuccess: (data) => {
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        setLoading(false);
        if (typeof onNext === "function") {
          onNext(formData);
        }
      },
      onError: (error) => {
        toast.error(error?.message);
        setLoading(false);
        console.error("API Error:", error);
        // You can also trigger a toast here
      },
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
      const newErrors = {};
      if (!formData.education_level.trim())
        newErrors.education_level = "Required.";
      if (!formData.occupation.trim()) newErrors.occupation = "Required.";
      if (!formData.annual_income.trim()) newErrors.annual_income = "Required.";
      if (!formData.work_location.trim()) newErrors.work_location = "Required.";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    useImperativeHandle(ref, () => ({
      submit(callback) {
        if (!validateForm()) return;
        mutation.mutate(formData, {
          onSuccess: () => {
            if (typeof callback === "function") {
              callback(); // e.g., redirect or close modal
            }
          },
        });
      },
    }));

    return (
      <div className="w-full mb-10">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1 flex items-center">
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
                d="M9.75 3.75h4.5m-9 0h.75m13.5 0h.75m-4.5 0v2.25m0 0V6a2.25 2.25 0 002.25 2.25h1.5A2.25 2.25 0 0021 6V5.25a.75.75 0 00-.75-.75H18m-4.5 0H9.75M6 6v.75a2.25 2.25 0 01-2.25 2.25h-1.5A2.25 2.25 0 010 6.75V6a.75.75 0 01.75-.75H6z"
              />
            </svg>
            Career & Education
          </h2>
          <p className="text-gray-500 mb-6">
            Share your education and career information
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Level */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Education Level <span className="text-red-600">*</span>
                </label>
                <select
                  name="education_level"
                  value={formData.education_level}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select Education Level
                  </option>
                  <option>High School</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>Ph.D</option>
                  <option>Diploma</option>
                  <option>Other</option>
                </select>
                {errors.education_level && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.education_level}
                  </p>
                )}
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Occupation <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Your occupation"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
                {errors.occupation && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.occupation}
                  </p>
                )}
              </div>

              {/* Annual Income */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Annual Income
                </label>
                <select
                  name="annual_income"
                  value={formData.annual_income}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select Income Range
                  </option>
                  <option>Under €30,000</option>
                  <option>€30,000 - €50,000</option>
                  <option>€50,000 - €75,000</option>
                  <option>€75,000 -€$100,000</option>
                  <option>Over €100,000</option>
                  <option>Prefer not to say</option>
                </select>
                {errors.annual_income && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.annual_income}
                  </p>
                )}
              </div>

              {/* Work Location */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Work Location
                </label>
                <input
                  type="text"
                  name="work_location"
                  value={formData.work_location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
                {errors.work_location && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.work_location}
                  </p>
                )}
              </div>
            </div>

            {mutation.isLoading && (
              <p className="text-center text-red-600 mt-4">Submitting...</p>
            )}
          </form>
        </div>
      </div>
    );
  }
);

export default CareerForm;
