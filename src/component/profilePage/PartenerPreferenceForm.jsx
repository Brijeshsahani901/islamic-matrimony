"use client";
import React, { useState, useEffect } from 'react';
import {
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const PartnerPreferencesForm = ({ initialData = {}, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(initialData);

  useEffect(() => {
    setPreferences(initialData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setPreferences(initialData);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (typeof onSave === 'function') {
      onSave(preferences);
    }
    setIsEditing(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Partner Preferences</h2>
          <p className="text-sm text-gray-500">Specify what you're looking for in a life partner</p>
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

      {/* Age Range */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormField
          label="Minimum Age"
          name="min_age"
          value={preferences?.min_age}
          onChange={handleChange}
          editable={isEditing}
          type="number"
          suffix="years"
        />
        <FormField
          label="Maximum Age"
          name="max_age"
          value={preferences?.max_age}
          onChange={handleChange}
          editable={isEditing}
          type="number"
          suffix="years"
        />
      </div>

      {/* Education & Location */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <FormField
          label="Preferred Education Level"
          name="education"
          value={preferences?.education}
          onChange={handleChange}
          editable={isEditing}
        />
        <FormField
          label="Preferred Location"
          name="location"
          value={preferences?.location}
          onChange={handleChange}
          editable={isEditing}
        />
      </div>

      <hr className="my-4" />

      {/* Marriage Preferences */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Type of Marriage Preferred"
          name="marriage_preferred"
          value={preferences?.marriage_preferred}
          onChange={handleChange}
          editable={isEditing}
        />

        <FormSelect
          label="Willing to Relocate?"
          name="relocate"
          value={preferences?.relocate}
          onChange={handleChange}
          editable={isEditing}
          options={["yes", "no", "maybe"]}
        />

      
      </div>
    </div>
  );
};

export default PartnerPreferencesForm;

// 🔧 Reusable components for cleaner form
function FormField({ label, name, value, onChange, editable, type = "text", suffix = "" }) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      {editable ? (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
        />
      ) : (
        <p className="mt-1">{value}{suffix && ` ${suffix}`}</p>
      )}
    </div>
  );
}

function FormSelect({ label, name, value, onChange, editable, options = [] }) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      {editable ? (
        <select
          name={name}
          value={value || ""}
          onChange={onChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </option>
          ))}
        </select>
      ) : (
        <p className="mt-1">{value}</p>
      )}
    </div>
  );
}
