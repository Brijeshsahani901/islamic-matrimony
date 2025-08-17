// "use client";
// import { useEffect, useState } from "react";
// import {
//   PencilSquareIcon,
//   CheckCircleIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";

// const CareerForm = ({ initialData = {}, onSave }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [careerInfo, setCareerInfo] = useState({
//     ...initialData,
//   });

//   console.log(careerInfo);

//   useEffect(() => {
//     setCareerInfo({
//       ...initialData,
//     });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCareerInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = () => setIsEditing(true);
//   const handleCancel = () => {
//     setCareerInfo(initialData);
//     setIsEditing(false);
//   };

//   const handleSave = () => {
//     onSave(careerInfo);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className="text-2xl font-semibold">Career & Education</h2>
//           <p className="text-sm text-gray-500">Your professional background</p>
//         </div>

//         {!isEditing ? (
//           <button
//             onClick={handleEdit}
//             className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
//           >
//             <PencilSquareIcon className="w-5 h-5" />
//             Edit
//           </button>
//         ) : (
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={handleSave}
//               className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-green-600 hover:text-white"
//             >
//               <CheckCircleIcon className="w-5 h-5" />
//               Save
//             </button>
//             <button
//               onClick={handleCancel}
//               className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-red-600 hover:text-white"
//             >
//               <XCircleIcon className="w-5 h-5" />
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Form Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Education Level */}
//         <div>
//           <label className="block font-medium text-gray-700">
//             Education Level
//           </label>
//           {isEditing ? (
//             <select
//               name="education_level"
//               value={careerInfo.education_level}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="" disabled>
//                 Select Education Level
//               </option>
//               <option>High School</option>
//               <option>Bachelor's Degree</option>
//               <option>Master's Degree</option>
//               <option>Ph.D</option>
//               <option>Other</option>
//             </select>
//           ) : (
//             <p className="mt-1">{careerInfo.education_level || "—"}</p>
//           )}
//         </div>

//         {/* Profession */}
//         <div>
//           <label className="block font-medium text-gray-700">Occupation</label>
//           {isEditing ? (
//             <input
//               type="text"
//               name="occupation"
//               value={careerInfo.occupation}
//               onChange={handleChange}
//               placeholder="Your occupation"
//               className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//             />
//           ) : (
//             <p className="mt-1">{careerInfo.occupation || "—"}</p>
//           )}
//         </div>

//         {/* Income Range */}
//         <div>
//           <label className="block font-medium text-gray-700">
//             Annual Income
//           </label>
//           {isEditing ? (
//             <select
//               name="annual_income"
//               value={careerInfo.annual_income}
//               onChange={handleChange}
//               className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="" disabled>
//                 Select Income Range
//               </option>
//               <option>Less than $25,000</option>
//               <option>$25,000 - $50,000</option>
//               <option>$50,000 - $100,000</option>
//               <option>Over $100,000</option>
//             </select>
//           ) : (
//             <p className="mt-1">{careerInfo.annual_income || "—"}</p>
//           )}
//         </div>

//         {/* Work Location */}
//         <div>
//           <label className="block font-medium text-gray-700">
//             Work Location
//           </label>
//           {isEditing ? (
//             <input
//               type="text"
//               name="work_location"
//               value={careerInfo.work_location}
//               onChange={handleChange}
//               placeholder="City, Country"
//               className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//             />
//           ) : (
//             <p className="mt-1">{careerInfo.work_location || "—"}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerForm;

"use client";
import React, { useState, useEffect } from "react";
import {
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const CareerForm = ({ initialData = {}, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [careerInfo, setCareerInfo] = useState({
    ...initialData,
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setCareerInfo({
      ...initialData,
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setCareerInfo(initialData);
    setErrors({});
    setIsEditing(false);
  };

  // Validation: all fields required
  const validate = () => {
    const newErrors = {};
    if (!careerInfo.education_level || careerInfo.education_level.trim() === "") {
      newErrors.education_level = "Education level is required.";
    }
    if (!careerInfo.occupation || careerInfo.occupation.trim() === "") {
      newErrors.occupation = "Occupation is required.";
    }
    if (!careerInfo.annual_income || careerInfo.annual_income.trim() === "") {
      newErrors.annual_income = "Annual income is required.";
    }
    if (!careerInfo.work_location || careerInfo.work_location.trim() === "") {
      newErrors.work_location = "Work location is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    if (typeof onSave === "function") {
      onSave(careerInfo);
    }
    setIsEditing(false);
    showToast("Career & Education saved successfully!");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Career & Education</h2>
          <p className="text-sm text-gray-500">Your professional background</p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            <PencilSquareIcon className="w-5 h-5" />
            Edit
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-green-600 hover:text-white"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-red-600 hover:text-white"
            >
              <XCircleIcon className="w-5 h-5" />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          label="Education Level"
          name="education_level"
          value={careerInfo.education_level}
          onChange={handleChange}
          editable={isEditing}
          options={[
            "High School",
            "Bachelor's Degree",
            "Master's Degree",
            "Ph.D",
            "Other",
          ]}
          placeholder="Select Education Level"
          error={errors.education_level}
        />

        <FormField
          label="Occupation"
          name="occupation"
          value={careerInfo.occupation}
          onChange={handleChange}
          editable={isEditing}
          placeholder="Your occupation"
          error={errors.occupation}
        />

        <FormSelect
          label="Annual Income"
          name="annual_income"
          value={careerInfo.annual_income}
          onChange={handleChange}
          editable={isEditing}
          options={[
            "Less than $25,000",
            "$25,000 - $50,000",
            "$50,000 - $100,000",
            "Over $100,000",
          ]}
          placeholder="Select Income Range"
          error={errors.annual_income}
        />

        <FormField
          label="Work Location"
          name="work_location"
          value={careerInfo.work_location}
          onChange={handleChange}
          editable={isEditing}
          placeholder="City, Country"
          error={errors.work_location}
        />
      </div>
    </div>
  );
};

export default CareerForm;

// Reusable text input component with error display
function FormField({ label, name, value, onChange, editable, type = "text", placeholder, error }) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      {editable ? (
        <>
          <input
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <p className="mt-1">{value || "—"}</p>
      )}
    </div>
  );
}

// Reusable select component with error display
function FormSelect({ label, name, value, onChange, editable, options = [], placeholder, error }) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      {editable ? (
        <>
          <select
            name={name}
            value={value || ""}
            onChange={onChange}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <p className="mt-1">{value || "—"}</p>
      )}
    </div>
  );
}

