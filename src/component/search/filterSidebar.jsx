
import React from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';

const FilterSidebar = ({ filters, setFilters, clearFilters }) => {
  const options = {
    gender: [
      { value: 'All', label: 'All Genders' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
    country: [
      { value: 'All', label: 'All Countries' },
      { value: 'Pakistan', label: 'Pakistan' },
      { value: 'India', label: 'India' },
      { value: 'UK', label: 'UK' },
    ],
    sect: [
      { value: 'All', label: 'All Sects' },
      { value: 'Sunni', label: 'Sunni' },
      { value: 'Shia', label: 'Shia' },
    ],
    status: [
      { value: 'All', label: 'All Statuses' },
      { value: 'Never Married', label: 'Never Married' },
      { value: 'Divorced', label: 'Divorced' },
      { value: 'Widowed', label: 'Widowed' },
    ],
    annual_income: [
      { value: 'All', label: 'All Incomes' },
      { value: '$0 - $25,000', label: '$0 - $25k' },
      { value: '$25,001 - $50,000', label: '$25k - $50k' },
      { value: '$50,001 - $75,000', label: '$50k - $75k' },
      { value: '$75,001+', label: '$75k+' },
    ],
  };

  const handleSelectChange = (key) => (selectedOption) => {
    setFilters({ ...filters, [key]: selectedOption.value });
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-72 bg-white p-6 border border-gray-200 rounded-xl shadow-lg space-y-5 sticky top-25"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Search Filters</h2>
        <button
          onClick={clearFilters}
          className="text-red-600 text-sm hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Keyword Search */}
      <div>
        <label className="block text-md font-medium text-gray-600 mb-1">Search</label>
        <input
          type="text"
          placeholder="Name or profession"
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
      </div>

      {/* Age Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Age: 18 - {filters.max_age || 50} yrs
        </label>
        <input
          type="range"
          min="18"
          max="50"
          value={filters.max_age || 50}
          onChange={(e) =>
            setFilters({ ...filters, min_age: 18, max_age: Number(e.target.value) })
          }
          className="w-full accent-red-600"
        />
      </div>

      {/* Filters Using Dropdowns */}
      {Object.entries(options).map(([key, opts]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
            {key.replace('_', ' ')}
          </label>
          <Select
            options={opts}
            value={opts.find((opt) => opt.value === filters[key])}
            onChange={handleSelectChange(key)}
            className="text-sm"
            classNamePrefix="react-select"
            isSearchable
          />
        </div>
      ))}
    </motion.div>
  );
};

export default FilterSidebar;
