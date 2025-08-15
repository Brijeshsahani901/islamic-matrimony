"use client";
import { useEffect, useState } from "react";
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

  console.log(careerInfo);

  useEffect(() => {
    setCareerInfo({
      ...initialData,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setCareerInfo(initialData);
    setIsEditing(false);
  };

  const handleSave = () => {
    onSave(careerInfo);
    setIsEditing(false);
  };

  return (
    <div>
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
        {/* Education Level */}
        <div>
          <label className="block font-medium text-gray-700">
            Education Level
          </label>
          {isEditing ? (
            <select
              name="education_level"
              value={careerInfo.education_level}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="" disabled>
                Select Education Level
              </option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Ph.D</option>
              <option>Other</option>
            </select>
          ) : (
            <p className="mt-1">{careerInfo.education_level || "—"}</p>
          )}
        </div>

        {/* Profession */}
        <div>
          <label className="block font-medium text-gray-700">Occupation</label>
          {isEditing ? (
            <input
              type="text"
              name="occupation"
              value={careerInfo.occupation}
              onChange={handleChange}
              placeholder="Your occupation"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="mt-1">{careerInfo.occupation || "—"}</p>
          )}
        </div>

        {/* Income Range */}
        <div>
          <label className="block font-medium text-gray-700">
            Annual Income
          </label>
          {isEditing ? (
            <select
              name="annual_income"
              value={careerInfo.annual_income}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="" disabled>
                Select Income Range
              </option>
              <option>Less than $25,000</option>
              <option>$25,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>Over $100,000</option>
            </select>
          ) : (
            <p className="mt-1">{careerInfo.annual_income || "—"}</p>
          )}
        </div>

        {/* Work Location */}
        <div>
          <label className="block font-medium text-gray-700">
            Work Location
          </label>
          {isEditing ? (
            <input
              type="text"
              name="work_location"
              value={careerInfo.work_location}
              onChange={handleChange}
              placeholder="City, Country"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <p className="mt-1">{careerInfo.work_location || "—"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
