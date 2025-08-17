// "use client";
// import React, { useState, useEffect } from 'react';
// import {
//   PencilSquareIcon,
//   CheckCircleIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";

// const PersonalInfo = ({ initialData = {}, onSave }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(initialData);

//   console.log(formData)
//   // Sync changes if initialData updates
// useEffect(() => {
//   if (JSON.stringify(formData) !== JSON.stringify(initialData)) {
//     setFormData(initialData);
//   }
// }, [initialData]);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleCancel = () => {
//     setFormData(initialData);
//     setIsEditing(false);
//   };

//   const handleSave = () => {
//     if (typeof onSave === "function") {
//       console.log(formData)
//       onSave(formData); // Pass updated form data to parent
//     }
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-semibold">Personal Information</h2>
//           <p className="text-sm text-gray-500">Manage your basic profile information</p>
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

//       <div className="grid grid-cols-2 gap-6">
//         {/* First Name */}
//         <FormField label="First Name" name="first_name" value={formData.first_name} editable={isEditing} onChange={handleChange} />

//         {/* Last Name */}
//         <FormField label="Last Name" name="last_name" value={formData.last_name} editable={isEditing} onChange={handleChange} />

//         {/* Email (non-editable) */}
//         <div>
//           <label className="block font-medium text-gray-700">Email Address</label>
//           <p className="mt-1 text-sm text-gray-500">Cannot be changed</p>
//         </div>

//         {/* DOB */}
//         <FormField label="Date of Birth" name="date_of_birth" value={formData.date_of_birth} editable={isEditing} onChange={handleChange} type="date" />

//         {/* Phone */}
//         <FormField label="Gender" name="gender" value={formData.gender} editable={isEditing} onChange={handleChange} />

//         {/* Country */}
//         <FormField label="health Condition" name="health_conditions" value={formData.health_conditions} editable={isEditing} onChange={handleChange} />

//         {/* City */}
//         <FormField label="expectation" name="expectations" value={formData.expectations} editable={isEditing} onChange={handleChange} />

//         {/* About */}
//         <FormTextarea label="About Yourself" name="about_me" value={formData.about_me} editable={isEditing} onChange={handleChange} />

//         {/* Marital Status */}
//         {/* <div>
//           <label className="block font-medium text-gray-700">Marital Status</label>
//           {isEditing ? (
//             <select
//               name="marital_status"
//               value={formData.marital_status}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="single">Single</option>
//               <option value="married">Married</option>
//               <option value="divorced">Divorced</option>
//             </select>
//           ) : (
//             <p className="mt-1">{formData.marital_status}</p>
//           )}
//         </div> */}

//         {/* Religion */}
//         {/* <FormField label="Religious Sect" name="religion" value={formData.religion} editable={isEditing} onChange={handleChange} /> */}
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;

// // 🧩 Reusable field components

// function FormField({ label, name, value, editable, onChange, type = "text" }) {
//   return (
//     <div>
//       <label className="block font-medium text-gray-700">{label}</label>
//       {editable ? (
//         <input
//           type={type}
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
//         />
//       ) : (
//         <p className="mt-1">{value}</p>
//       )}
//     </div>
//   );
// }

// function FormTextarea({ label, name, value, editable, onChange, rows = 3 }) {
//   return (
//     <div className="col-span-2">
//       <label className="block font-medium text-gray-700">{label}</label>
//       {editable ? (
//         <textarea
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           rows={rows}
//           className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
//         />
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

const PersonalInfo = ({ initialData = {}, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Sync changes if initialData updates
  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  // Validate fields
  const validate = (data) => {
    const errs = {};
    if (!data.first_name || data.first_name.trim() === "") {
      errs.first_name = "First name is required";
    }
    if (!data.last_name || data.last_name.trim() === "") {
      errs.last_name = "Last name is required";
    }
    if (data.date_of_birth && isNaN(Date.parse(data.date_of_birth))) {
      errs.date_of_birth = "Invalid date";
    }
    if (!data.gender || data.gender.trim() === "") {
      errs.gender = "Gender is required";
    }
    return errs;
  };

  // On input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      setErrors(validate(updated));
      return updated;
    });
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setFormData(initialData);
    setErrors({});
    setIsEditing(false);
  };

  const handleSave = () => {
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      if (typeof onSave === "function") {
        onSave(formData);
      }
      setIsEditing(false);
      // Show success toast
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    }
  };

  // Disable save if errors exist or required fields empty
  const isSaveDisabled =
    Object.keys(errors).length > 0 ||
    !formData.first_name ||
    !formData.last_name ||
    !formData.gender;

  return (
    <div className="relative">
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 z-50 rounded bg-green-600 text-white px-5 py-3 shadow-lg"
          >
            Profile saved successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          <p className="text-sm text-gray-500">
            Manage your basic profile information
          </p>
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
            <motion.button
              onClick={handleSave}
              disabled={isSaveDisabled}
              whileTap={{ scale: isSaveDisabled ? 1 : 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 ${
                isSaveDisabled
                  ? "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed"
                  : "bg-green-600 text-white border border-green-600 hover:bg-green-700"
              }`}
            >
              <CheckCircleIcon className="w-5 h-5" />
              Save
            </motion.button>
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

      <div className="grid grid-cols-2 gap-6">
        {/* First Name */}
        <FormField
          label="First Name"
          name="first_name"
          value={formData.first_name}
          editable={isEditing}
          onChange={handleChange}
          error={errors.first_name}
        />

        {/* Last Name */}
        <FormField
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          editable={isEditing}
          onChange={handleChange}
          error={errors.last_name}
        />

        {/* Email (non-editable) */}
        <div>
          <label className="block font-medium text-gray-700">Email Address</label>
          <p className="mt-1 text-sm text-gray-500">Cannot be changed</p>
        </div>

        {/* DOB */}
        <FormField
          label="Date of Birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          editable={isEditing}
          onChange={handleChange}
          type="date"
          error={errors.date_of_birth}
        />

        {/* Gender */}
        <FormField
          label="Gender"
          name="gender"
          value={formData.gender}
          editable={isEditing}
          onChange={handleChange}
          error={errors.gender}
        />

        {/* Health Condition */}
        <FormField
          label="Health Condition"
          name="health_conditions"
          value={formData.health_conditions}
          editable={isEditing}
          onChange={handleChange}
        />

        {/* Expectations */}
        <FormField
          label="Expectation"
          name="expectations"
          value={formData.expectations}
          editable={isEditing}
          onChange={handleChange}
        />

        {/* About */}
        <FormTextarea
          label="About Yourself"
          name="about_me"
          value={formData.about_me}
          editable={isEditing}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;

// 🧩 Reusable field components with validation error display and animation

function FormField({ label, name, value, editable, onChange, type = "text", error }) {
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
            className={`mt-1 block w-full border rounded px-3 py-2 ${
              error
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 focus:border-blue-500"
            } transition`}
          />
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-500 text-xs mt-1"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </>
      ) : (
        <p className="mt-1">{value}</p>
      )}
    </div>
  );
}

function FormTextarea({ label, name, value, editable, onChange, rows = 3, error }) {
  return (
    <div className="col-span-2">
      <label className="block font-medium text-gray-700">{label}</label>
      {editable ? (
        <>
          <textarea
            name={name}
            value={value || ""}
            onChange={onChange}
            rows={rows}
            className={`mt-1 block w-full border rounded px-3 py-2 ${
              error
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 focus:border-blue-500"
            } transition`}
          />
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-500 text-xs mt-1"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </>
      ) : (
        <p className="mt-1">{value}</p>
      )}
    </div>
  );
}
