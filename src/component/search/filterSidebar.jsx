
// import React from 'react';
// import Select from 'react-select';
// import { motion } from 'framer-motion';

// const FilterSidebar = ({ filters, setFilters, clearFilters }) => {
//   const options = {
//     gender: [
//       { value: 'All', label: 'All Genders' },
//       { value: 'male', label: 'Male' },
//       { value: 'female', label: 'Female' },
//       { value: 'other', label: 'Other' },
//     ],
//     country: [
//       { value: 'All', label: 'All Countries' },
//       { value: 'Pakistan', label: 'Pakistan' },
//       { value: 'India', label: 'India' },
//       { value: 'UK', label: 'UK' },
//     ],
//     sect: [
//       { value: 'All', label: 'All Sects' },
//       { value: 'Sunni', label: 'Sunni' },
//       { value: 'Shia', label: 'Shia' },
//     ],
//     status: [
//       { value: 'All', label: 'All Statuses' },
//       { value: 'Never Married', label: 'Never Married' },
//       { value: 'Divorced', label: 'Divorced' },
//       { value: 'Widowed', label: 'Widowed' },
//     ],
//     annual_income: [
//       { value: 'All', label: 'All Incomes' },
//       { value: '$0 - $25,000', label: '$0 - $25k' },
//       { value: '$25,001 - $50,000', label: '$25k - $50k' },
//       { value: '$50,001 - $75,000', label: '$50k - $75k' },
//       { value: '$75,001+', label: '$75k+' },
//     ],
//   };

//   const handleSelectChange = (key) => (selectedOption) => {
//     setFilters({ ...filters, [key]: selectedOption.value });
//   };

//   return (
//     <motion.div
//       initial={{ x: -20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.3 }}
//       className="w-72 bg-white p-6 border border-gray-200 rounded-xl shadow-lg space-y-5 sticky top-25"
//     >
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-semibold text-gray-800">Search Filters</h2>
//         <button
//           onClick={clearFilters}
//           className="text-red-600 text-sm hover:underline"
//         >
//           Clear All
//         </button>
//       </div>

//       {/* Keyword Search */}
//       <div>
//         <label className="block text-md font-medium text-gray-600 mb-1">Search</label>
//         <input
//           type="text"
//           placeholder="Name or profession"
//           value={filters.search}
//           onChange={(e) =>
//             setFilters({ ...filters, search: e.target.value })
//           }
//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
//         />
//       </div>

//       {/* Age Slider */}
//       <div>
//         <label className="block text-sm font-medium text-gray-600 mb-2">
//           Age: 18 - {filters.max_age || 50} yrs
//         </label>
//         <input
//           type="range"
//           min="18"
//           max="50"
//           value={filters.max_age || 50}
//           onChange={(e) =>
//             setFilters({ ...filters, min_age: 18, max_age: Number(e.target.value) })
//           }
//           className="w-full accent-red-600"
//         />
//       </div>

//       {/* Filters Using Dropdowns */}
//       {Object.entries(options).map(([key, opts]) => (
//         <div key={key}>
//           <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
//             {key.replace('_', ' ')}
//           </label>
//      <Select
//   options={opts}
//   value={opts.find((opt) => opt.value === filters[key])}
//   onChange={handleSelectChange(key)}
//   className="rounded-lg transition-all"
//   classNamePrefix="react-select"
//   isSearchable
//   styles={{
//     control: (base, state) => ({
//       ...base,
//       borderColor: state.isFocused ? '#dc2626' : '#d1d5db', // red if focused, gray otherwise
//       boxShadow: state.isFocused
//         ? '0 0 0 2px rgba(220, 38, 38, 0.5)' // red-600 focus ring
//         : 'none',
//       '&:hover': {
//         borderColor: state.isFocused ? '#dc2626' : '#9ca3af', // red if focused, gray-400 otherwise
//       },
//     }),
//   }}
// />


//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default FilterSidebar;

import React from 'react';
import { motion } from 'framer-motion';

const FilterSidebar = ({ filters, setFilters, clearFilters }) => {
  const options = {
    gender: [
      { value: 'All', label: 'All Genders' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
  country : [
  { value: 'All', label: 'All Countries' },
  { value: 'Pakistan', label: 'Pakistan' },
  { value: 'India', label: 'India' },
  { value: 'UK', label: 'UK' },
  { value: 'Afghan', label: 'Afghan' },
  { value: 'Albanian', label: 'Albanian' },
  { value: 'Algerian', label: 'Algerian' },
  { value: 'American', label: 'American' },
  { value: 'Andorran', label: 'Andorran' },
  { value: 'Angolan', label: 'Angolan' },
  { value: 'Antiguan and Barbudan', label: 'Antiguan and Barbudan' },
  { value: 'Argentine', label: 'Argentine' },
  { value: 'Armenian', label: 'Armenian' },
  { value: 'Australian', label: 'Australian' },
  { value: 'Austrian', label: 'Austrian' },
  { value: 'Azerbaijani', label: 'Azerbaijani' },
  { value: 'Bahamian', label: 'Bahamian' },
  { value: 'Bahraini', label: 'Bahraini' },
  { value: 'Bangladeshi', label: 'Bangladeshi' },
  { value: 'Barbadian', label: 'Barbadian' },
  { value: 'Belarusian', label: 'Belarusian' },
  { value: 'Belgian', label: 'Belgian' },
  { value: 'Belizean', label: 'Belizean' },
  { value: 'Beninese', label: 'Beninese' },
  { value: 'Bhutanese', label: 'Bhutanese' },
  { value: 'Bolivian', label: 'Bolivian' },
  { value: 'Bosnian', label: 'Bosnian' },
  { value: 'Botswanan', label: 'Botswanan' },
  { value: 'Brazilian', label: 'Brazilian' },
  { value: 'British', label: 'British' },
  { value: 'Bruneian', label: 'Bruneian' },
  { value: 'Bulgarian', label: 'Bulgarian' },
  { value: 'Burkinabé', label: 'Burkinabé' },
  { value: 'Burmese', label: 'Burmese' },
  { value: 'Burundian', label: 'Burundian' },
  { value: 'Cabo Verdean', label: 'Cabo Verdean' },
  { value: 'Cambodian', label: 'Cambodian' },
  { value: 'Cameroonian', label: 'Cameroonian' },
  { value: 'Canadian', label: 'Canadian' },
  { value: 'Central African', label: 'Central African' },
  { value: 'Chadian', label: 'Chadian' },
  { value: 'Chilean', label: 'Chilean' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Colombian', label: 'Colombian' },
  { value: 'Comoran', label: 'Comoran' },
  { value: 'Congolese (Congo-Brazzaville)', label: 'Congolese (Congo-Brazzaville)' },
  { value: 'Congolese (Congo-Kinshasa)', label: 'Congolese (Congo-Kinshasa)' },
  { value: 'Costa Rican', label: 'Costa Rican' },
  { value: 'Croatian', label: 'Croatian' },
  { value: 'Cuban', label: 'Cuban' },
  { value: 'Cypriot', label: 'Cypriot' },
  { value: 'Czech', label: 'Czech' },
  { value: 'Danish', label: 'Danish' },
  { value: 'Djiboutian', label: 'Djiboutian' },
  { value: 'Dominican', label: 'Dominican' },
  { value: 'Dominican (Republic)', label: 'Dominican (Republic)' },
  { value: 'Dutch', label: 'Dutch' },
  { value: 'East Timorese', label: 'East Timorese' },
  { value: 'Ecuadorean', label: 'Ecuadorean' },
  { value: 'Egyptian', label: 'Egyptian' },
  { value: 'Emirati', label: 'Emirati' },
  { value: 'Equatorial Guinean', label: 'Equatorial Guinean' },
  { value: 'Eritrean', label: 'Eritrean' },
  { value: 'Estonian', label: 'Estonian' },
  { value: 'Ethiopian', label: 'Ethiopian' },
  { value: 'Fijian', label: 'Fijian' },
  { value: 'Finnish', label: 'Finnish' },
  { value: 'French', label: 'French' },
  { value: 'Gabonese', label: 'Gabonese' },
  { value: 'Gambian', label: 'Gambian' },
  { value: 'Georgian', label: 'Georgian' },
  { value: 'German', label: 'German' },
  { value: 'Ghanaian', label: 'Ghanaian' },
  { value: 'Greek', label: 'Greek' },
  { value: 'Grenadian', label: 'Grenadian' },
  { value: 'Guatemalan', label: 'Guatemalan' },
  { value: 'Guinean', label: 'Guinean' },
  { value: 'Guinea-Bissauan', label: 'Guinea-Bissauan' },
  { value: 'Guyanese', label: 'Guyanese' },
  { value: 'Haitian', label: 'Haitian' },
  { value: 'Honduran', label: 'Honduran' },
  { value: 'Hungarian', label: 'Hungarian' },
  { value: 'Icelandic', label: 'Icelandic' },
  { value: 'Indian', label: 'Indian' },
  { value: 'Indonesian', label: 'Indonesian' },
  { value: 'Iranian', label: 'Iranian' },
  { value: 'Iraqi', label: 'Iraqi' },
  { value: 'Irish', label: 'Irish' },
  { value: 'Israeli', label: 'Israeli' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Ivorian', label: 'Ivorian' },
  { value: 'Jamaican', label: 'Jamaican' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Jordanian', label: 'Jordanian' },
  { value: 'Kazakh', label: 'Kazakh' },
  { value: 'Kenyan', label: 'Kenyan' },
  { value: 'Kiribati', label: 'Kiribati' },
  { value: 'Kuwaiti', label: 'Kuwaiti' },
  { value: 'Kyrgyz', label: 'Kyrgyz' },
  { value: 'Laotian', label: 'Laotian' },
  { value: 'Latvian', label: 'Latvian' },
  { value: 'Lebanese', label: 'Lebanese' },
  { value: 'Liberian', label: 'Liberian' },
  { value: 'Libyan', label: 'Libyan' },
  { value: 'Liechtensteiner', label: 'Liechtensteiner' },
  { value: 'Lithuanian', label: 'Lithuanian' },
  { value: 'Luxembourgish', label: 'Luxembourgish' },
  { value: 'Macedonian', label: 'Macedonian' },
  { value: 'Malagasy', label: 'Malagasy' },
  { value: 'Malawian', label: 'Malawian' },
  { value: 'Malaysian', label: 'Malaysian' },
  { value: 'Maldivian', label: 'Maldivian' },
  { value: 'Malian', label: 'Malian' },
  { value: 'Maltese', label: 'Maltese' },
  { value: 'Marshallese', label: 'Marshallese' },
  { value: 'Mauritanian', label: 'Mauritanian' },
  { value: 'Mauritian', label: 'Mauritian' },
  { value: 'Mexican', label: 'Mexican' },
  { value: 'Micronesian', label: 'Micronesian' },
  { value: 'Moldovan', label: 'Moldovan' },
  { value: 'Monégasque', label: 'Monégasque' },
  { value: 'Mongolian', label: 'Mongolian' },
  { value: 'Montenegrin', label: 'Montenegrin' },
  { value: 'Moroccan', label: 'Moroccan' },
  { value: 'Mozambican', label: 'Mozambican' },
  { value: 'Namibian', label: 'Namibian' },
  { value: 'Nauruan', label: 'Nauruan' },
  { value: 'Nepalese', label: 'Nepalese' },
  { value: 'New Zealander', label: 'New Zealander' },
  { value: 'Nicaraguan', label: 'Nicaraguan' },
  { value: 'Nigerien', label: 'Nigerien' },
  { value: 'Nigerian', label: 'Nigerian' },
  { value: 'North Korean', label: 'North Korean' },
  { value: 'Norwegian', label: 'Norwegian' },
  { value: 'Omani', label: 'Omani' },
  { value: 'Pakistani', label: 'Pakistani' },
  { value: 'Palauan', label: 'Palauan' },
  { value: 'Palestinian', label: 'Palestinian' },
  { value: 'Panamanian', label: 'Panamanian' },
  { value: 'Papua New Guinean', label: 'Papua New Guinean' },
  { value: 'Paraguayan', label: 'Paraguayan' },
  { value: 'Peruvian', label: 'Peruvian' },
  { value: 'Philippine', label: 'Philippine' },
  { value: 'Polish', label: 'Polish' },
  { value: 'Portuguese', label: 'Portuguese' },
  { value: 'Qatari', label: 'Qatari' },
  { value: 'Romanian', label: 'Romanian' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Rwandan', label: 'Rwandan' },
  { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucian', label: 'Saint Lucian' },
  { value: 'Saint Vincentian', label: 'Saint Vincentian' },
  { value: 'Samoan', label: 'Samoan' },
  { value: 'San Marinese', label: 'San Marinese' },
  { value: 'Sao Tomean', label: 'Sao Tomean' },
  { value: 'Saudi', label: 'Saudi' },
  { value: 'Senegalese', label: 'Senegalese' },
  { value: 'Serbian', label: 'Serbian' },
  { value: 'Seychellois', label: 'Seychellois' },
  { value: 'Sierra Leonean', label: 'Sierra Leonean' },
  { value: 'Singaporean', label: 'Singaporean' },
  { value: 'Slovak', label: 'Slovak' },
  { value: 'Slovenian', label: 'Slovenian' },
  { value: 'Solomon Islander', label: 'Solomon Islander' },
  { value: 'Somali', label: 'Somali' },
  { value: 'South African', label: 'South African' },
  { value: 'South Korean', label: 'South Korean' },
  { value: 'South Sudanese', label: 'South Sudanese' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Sri Lankan', label: 'Sri Lankan' },
  { value: 'Sudanese', label: 'Sudanese' },
  { value: 'Surinamese', label: 'Surinamese' },
  { value: 'Swazi', label: 'Swazi' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Swiss', label: 'Swiss' },
  { value: 'Syrian', label: 'Syrian' },
  { value: 'Taiwanese', label: 'Taiwanese' },
  { value: 'Tajik', label: 'Tajik' },
  { value: 'Tanzanian', label: 'Tanzanian' },
  { value: 'Thai', label: 'Thai' },
  { value: 'Togolese', label: 'Togolese' },
  { value: 'Tongan', label: 'Tongan' },
  { value: 'Trinidadian and Tobagonian', label: 'Trinidadian and Tobagonian' },
  { value: 'Tunisian', label: 'Tunisian' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Turkmen', label: 'Turkmen' },
  { value: 'Tuvaluan', label: 'Tuvaluan' },
  { value: 'Ugandan', label: 'Ugandan' },
  { value: 'Ukrainian', label: 'Ukrainian' },
  { value: 'Uruguayan', label: 'Uruguayan' },
  { value: 'Uzbek', label: 'Uzbek' },
  { value: 'Vanuatuan', label: 'Vanuatuan' },
  { value: 'Vatican', label: 'Vatican' },
  { value: 'Venezuelan', label: 'Venezuelan' },
  { value: 'Vietnamese', label: 'Vietnamese' },
  { value: 'Yemeni', label: 'Yemeni' },
  { value: 'Zambian', label: 'Zambian' },
  { value: 'Zimbabwean', label: 'Zimbabwean' },
  { value: 'Other', label: 'Other' },
],

   
    status: [
      { value: 'All', label: 'All Statuses' },
      { value: 'Never Married', label: 'Never Married' },
      { value: 'Divorced', label: 'Divorced' },
      { value: 'Widowed', label: 'Widowed' },
      { value: 'Other', label: 'Other' },
    ],
    annual_income: [
      { value: 'All', label: 'All Incomes' },
      { value: 'Under €30,000', label: 'Under €30,000' },
      { value: '€30,000 - €50,000', label: '€30,000 - €50,000' },
      { value: '€50,000 - €75,000', label: '€50,000 - €75,000' },
      { value: '€75,000 -€$100,000', label: '€75,000 -€$100,000' },
{ value: 'Over €100,000', label: 'Over €100,000' },
      
      { value: 'Prefer not to say', label: 'Prefer not to say' },
    ],
  };

  const handleSelectChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  return (
 <motion.div
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="w-72 bg-white p-6 border border-gray-200 rounded-xl shadow-lg space-y-5 sticky top-25  no-scrollbar max-h-screen"
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
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
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

      {/* Native Select Filters */}
      {Object.entries(options).map(([key, opts]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
            {key.replace('_', ' ')}
          </label>
          <select
            value={filters[key]}
            onChange={handleSelectChange(key)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
          >
            {opts.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </motion.div>
  );
};

export default FilterSidebar;

