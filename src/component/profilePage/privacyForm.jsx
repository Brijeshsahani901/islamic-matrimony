// "use client";
// import React, { useState, useEffect } from "react";

// const PrivacyForm = ({ initialData = {}, onSave }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [settings, setSettings] = useState({
//     // show_email: false,
//     // show_phone: false,
//     profile_visibility: "Private - Only visible to matched users",
//     ...initialData,
//   });

//   useEffect(() => {
//     setSettings((prev) => ({ ...prev, ...initialData }));
//   }, []);

//   console.log(settings)

//   const handleToggle = (field) => {
//     setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleChange = (e) => {
//     setSettings((prev) => ({
//       ...prev,
//       profile_visibility: e.target.value,
//     }));
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleCancel = () => {
//     setSettings(initialData);
//     setIsEditing(false);
//   };

//   const handleSave = () => {
//     if (typeof onSave === "function") {
//       onSave(settings);
//     }
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-semibold flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-red-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 11v2m0-6h.01M5.07 5.07l1.41 1.41M1 12h2m16 0h2M5.07 18.93l1.41-1.41M18.93 5.07l-1.41 1.41M12 1v2m0 18v2m4.93-1.07l-1.41-1.41"
//               />
//             </svg>
//             Privacy Settings
//           </h2>
//           <p className="text-sm text-gray-500">
//             Control who can see your information and how you appear to others
//           </p>
//         </div>

//         {!isEditing ? (
//           <button
//             onClick={handleEdit}
//             className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
//           >
//             Edit
//           </button>
//         ) : (
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handleSave}
//               className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
//             >
//               Save
//             </button>
//             <button
//               onClick={handleCancel}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Toggles */}
//       <div className="mb-4 space-y-4">
//         <ToggleSetting
//           label="Show Last Seen"
//           description="Let others see when you were last active"
//           value={settings.show_phone}
//           disabled={!isEditing}
//           onToggle={() => handleToggle("show_phone")}
//         />
//         <ToggleSetting
//           label="Show Online Status"
//           description="Display when you're currently online"
//           value={settings.show_email}
//           disabled={!isEditing}
//           onToggle={() => handleToggle("show_email")}
//         />
//       </div>

//       <hr className="my-6" />

//       {/* Profile Visibility */}
//       <div className="mb-6">
//         <label className="block font-medium text-gray-700 mb-2">Profile Visibility</label>
//         {isEditing ? (
//           <select
//             value={settings.profile_visibility}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//           >
//             <option>Private - Only visible to matched users</option>
//             <option>Public - Visible to everyone</option>
//             <option>Hidden - Not visible to anyone</option>
//           </select>
//         ) : (
//           <p className="text-gray-700">{settings.profile_visibility}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PrivacyForm;

// // ✅ Toggle switch component
// function ToggleSetting({ label, description, value, onToggle, disabled }) {
//   return (
//     <div className="flex justify-between items-center">
//       <div>
//         <p className="font-medium">{label}</p>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={value}
//           disabled={disabled}
//           onChange={onToggle}
//           className="sr-only peer"
//         />
//         <div
//           className={`w-11 h-6 rounded-full transition-all ${
//             value ? "bg-red-600" : "bg-gray-400"
//           }`}
//         ></div>
//         <div
//           className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
//             value ? "translate-x-full" : ""
//           }`}
//         ></div>
//       </label>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";

const PrivacyForm = ({ initialData = {}, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    profile_visibility: "Private - Only visible to matched users",
    ...initialData,
  });
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setSettings((prev) => ({ ...prev, ...initialData }));
  }, [initialData]);

  const handleToggle = (field) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      profile_visibility: e.target.value,
    }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setSettings(initialData);
    setErrors({});
    setIsEditing(false);
  };

  // Simple validation: profile_visibility is required
  const validate = () => {
    let newErrors = {};
    if (!settings.profile_visibility || settings.profile_visibility.trim() === "") {
      newErrors.profile_visibility = "Please select profile visibility.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    if (typeof onSave === "function") {
      onSave(settings);
    }
    setIsEditing(false);
    showToast("Privacy settings saved successfully!");
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11v2m0-6h.01M5.07 5.07l1.41 1.41M1 12h2m16 0h2M5.07 18.93l1.41-1.41M18.93 5.07l-1.41 1.41M12 1v2m0 18v2m4.93-1.07l-1.41-1.41"
              />
            </svg>
            Privacy Settings
          </h2>
          <p className="text-sm text-gray-500">
            Control who can see your information and how you appear to others
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-400 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Edit
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Toggles */}
      <div className="mb-4 space-y-4">
        <ToggleSetting
          label="Show Last Seen"
          description="Let others see when you were last active"
          value={settings.show_phone}
          disabled={!isEditing}
          onToggle={() => handleToggle("show_phone")}
        />
        <ToggleSetting
          label="Show Online Status"
          description="Display when you're currently online"
          value={settings.show_email}
          disabled={!isEditing}
          onToggle={() => handleToggle("show_email")}
        />
      </div>

      <hr className="my-6" />

      {/* Profile Visibility */}
      <FormSelect
        label="Profile Visibility"
        name="profile_visibility"
        value={settings.profile_visibility}
        onChange={handleChange}
        editable={isEditing}
        options={[
          "Private - Only visible to matched users",
          "Public - Visible to everyone",
          "Hidden - Not visible to anyone",
        ]}
        error={errors.profile_visibility}
      />
    </div>
  );
};

export default PrivacyForm;

// Reusable ToggleSwitch component
function ToggleSetting({ label, description, value, onToggle, disabled }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={!!value}
          disabled={disabled}
          onChange={onToggle}
          className="sr-only peer"
        />
        <div
          className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all ${
            value ? "bg-red-600" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
            value ? "translate-x-full" : ""
          }`}
        ></div>
      </label>
    </div>
  );
}

// Reusable select component with error display
function FormSelect({ label, name, value, onChange, editable, options = [], error }) {
  return (
    <div className="mb-6">
      <label className="block font-medium text-gray-700 mb-2">{label}</label>
      {editable ? (
        <>
          <select
            name={name}
            value={value || ""}
            onChange={onChange}
            className={`w-full border rounded-md px-4 py-2 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
      ) : (
        <p className="text-gray-700">{value}</p>
      )}
    </div>
  );
}
