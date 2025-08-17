// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//   PencilSquareIcon,
//   CheckCircleIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";

// const PartnerPreferencesForm = ({ initialData = {}, onSave }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [preferences, setPreferences] = useState(initialData);

//   useEffect(() => {
//     setPreferences(initialData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPreferences((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleCancel = () => {
//     setPreferences(initialData);
//     setIsEditing(false);
//   };

//   const handleSave = () => {
//     if (typeof onSave === 'function') {
//       onSave(preferences);
//     }
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-semibold">Partner Preferences</h2>
//           <p className="text-sm text-gray-500">Specify what you're looking for in a life partner</p>
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

//       {/* Age Range */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <FormField
//           label="Minimum Age"
//           name="min_age"
//           value={preferences?.min_age}
//           onChange={handleChange}
//           editable={isEditing}
//           type="number"
//           suffix="years"
//         />
//         <FormField
//           label="Maximum Age"
//           name="max_age"
//           value={preferences?.max_age}
//           onChange={handleChange}
//           editable={isEditing}
//           type="number"
//           suffix="years"
//         />
//       </div>

//       {/* Education & Location */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <FormField
//           label="Preferred Education Level"
//           name="education"
//           value={preferences?.education}
//           onChange={handleChange}
//           editable={isEditing}
//         />
//         <FormField
//           label="Preferred Location"
//           name="location"
//           value={preferences?.location}
//           onChange={handleChange}
//           editable={isEditing}
//         />
//       </div>

//       <hr className="my-4" />

//       {/* Marriage Preferences */}
//       <div className="grid grid-cols-2 gap-4">
//         <FormField
//           label="Type of Marriage Preferred"
//           name="marriage_preferred"
//           value={preferences?.marriage_preferred}
//           onChange={handleChange}
//           editable={isEditing}
//         />

//         <FormSelect
//           label="Willing to Relocate?"
//           name="relocate"
//           value={preferences?.relocate}
//           onChange={handleChange}
//           editable={isEditing}
//           options={["yes", "no", "maybe"]}
//         />

      
//       </div>
//     </div>
//   );
// };

// export default PartnerPreferencesForm;

// // 🔧 Reusable components for cleaner form
// function FormField({ label, name, value, onChange, editable, type = "text", suffix = "" }) {
//   return (
//     <div>
//       <label className="block font-medium text-gray-700">{label}</label>
//       {editable ? (
//         <input
//           type={type}
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//         />
//       ) : (
//         <p className="mt-1">{value}{suffix && ` ${suffix}`}</p>
//       )}
//     </div>
//   );
// }

// function FormSelect({ label, name, value, onChange, editable, options = [] }) {
//   return (
//     <div>
//       <label className="block font-medium text-gray-700">{label}</label>
//       {editable ? (
//         <select
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
//         >
//           {options.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt.charAt(0).toUpperCase() + opt.slice(1)}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <p className="mt-1">{value}</p>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import {
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const PartnerPreferencesForm = ({ initialData = {}, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setPreferences(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setPreferences(initialData);
    setErrors({});
    setIsEditing(false);
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Validate min_age
    const minAge = Number(preferences.min_age);
    if (!preferences.min_age) {
      newErrors.min_age = "Minimum age is required.";
    } else if (isNaN(minAge) || minAge < 18 || minAge > 100) {
      newErrors.min_age = "Minimum age must be between 18 and 100.";
    }

    // Validate max_age
    const maxAge = Number(preferences.max_age);
    if (!preferences.max_age) {
      newErrors.max_age = "Maximum age is required.";
    } else if (isNaN(maxAge) || maxAge < 18 || maxAge > 100) {
      newErrors.max_age = "Maximum age must be between 18 and 100.";
    }

    // Check min_age <= max_age
    if (
      !newErrors.min_age &&
      !newErrors.max_age &&
      minAge > maxAge
    ) {
      newErrors.min_age = "Minimum age cannot be greater than maximum age.";
      newErrors.max_age = "Maximum age cannot be less than minimum age.";
    }

    // Validate education (required)
    if (!preferences.education || preferences.education.trim() === "") {
      newErrors.education = "Preferred education level is required.";
    }

    // Validate location (required)
    if (!preferences.location || preferences.location.trim() === "") {
      newErrors.location = "Preferred location is required.";
    }

    // Validate marriage_preferred (required)
    if (!preferences.marriage_preferred || preferences.marriage_preferred.trim() === "") {
      newErrors.marriage_preferred = "Type of marriage preferred is required.";
    }

    // Validate relocate (required, and must be one of options)
    const relocateOpts = ["yes", "no", "maybe"];
    if (!preferences.relocate || !relocateOpts.includes(preferences.relocate.toLowerCase())) {
      newErrors.relocate = "Please select if willing to relocate.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    if (typeof onSave === "function") {
      onSave(preferences);
    }
    setIsEditing(false);
    showToast("Partner preferences saved successfully!");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Partner Preferences
          </h2>
          <p className="text-sm text-gray-500">
            Specify what you're looking for in a life partner
          </p>
        </div>
        < div>
          {!isEditing ? (
            <button
              key="edit-btn"
              onClick={handleEdit}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <PencilSquareIcon className="w-5 h-5" />
              Edit
            </button>
          ) : (
            <div
              key="edit-controls"
              className="flex items-center space-x-2"
             
            >
              <motion.button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 text-green-700 border border-green-400 rounded-md shadow-sm hover:bg-green-600 hover:text-white transition"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <CheckCircleIcon className="w-5 h-5" />
                Save
              </motion.button>
              <motion.button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 text-red-700 border border-red-400 rounded-md shadow-sm hover:bg-red-600 hover:text-white transition"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <XCircleIcon className="w-5 h-5" />
                Cancel
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Age Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <FormField
          label="Minimum Age"
          name="min_age"
          value={preferences?.min_age}
          onChange={handleChange}
          editable={isEditing}
          type="number"
          suffix="years"
          min={18}
          max={100}
          error={errors.min_age}
        />
        <FormField
          label="Maximum Age"
          name="max_age"
          value={preferences?.max_age}
          onChange={handleChange}
          editable={isEditing}
          type="number"
          suffix="years"
          min={18}
          max={100}
          error={errors.max_age}
        />
      </div>

      {/* Education & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <FormField
          label="Preferred Education Level"
          name="education"
          value={preferences?.education}
          onChange={handleChange}
          editable={isEditing}
          placeholder="e.g., Bachelor’s, Master’s, PhD"
          error={errors.education}
        />
        <FormField
          label="Preferred Location"
          name="location"
          value={preferences?.location}
          onChange={handleChange}
          editable={isEditing}
          placeholder="e.g., City, Country"
          error={errors.location}
        />
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Marriage Preferences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          label="Type of Marriage Preferred"
          name="marriage_preferred"
          value={preferences?.marriage_preferred}
          onChange={handleChange}
          editable={isEditing}
          placeholder="e.g., Nikah, Court Marriage"
          error={errors.marriage_preferred}
        />

        <FormSelect
          label="Willing to Relocate?"
          name="relocate"
          value={preferences?.relocate}
          onChange={handleChange}
          editable={isEditing}
          options={["yes", "no", "maybe"]}
          error={errors.relocate}
        />
      </div>
    </div>
  );
};

export default PartnerPreferencesForm;

// Reusable Input Component with error display
function FormField({
  label,
  name,
  value,
  onChange,
  editable,
  type = "text",
  suffix = "",
  placeholder = "",
  min,
  max,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-medium text-gray-700 mb-1 select-none"
      >
        {label}
      </label>
      {editable ? (
        <>
          <input
            id={name}
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            max={max}
            className={`mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 transition ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-red-400"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <p className="mt-1 text-gray-800">
          {value}
          {suffix && ` ${suffix}`}
        </p>
      )}
    </div>
  );
}

// Reusable Select Component with error display
function FormSelect({ label, name, value, onChange, editable, options = [], error }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-medium text-gray-700 mb-1 select-none"
      >
        {label}
      </label>
      {editable ? (
        <>
          <select
            id={name}
            name={name}
            value={value || ""}
            onChange={onChange}
            className={`mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 transition ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-red-400"
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <p className="mt-1 text-gray-800">{value}</p>
      )}
    </div>
  );
}
