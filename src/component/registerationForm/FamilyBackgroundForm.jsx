"use client";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useMutation } from "@tanstack/react-query";
import { familyInfoUpdated } from "@/api/profile.api";
import toast from "react-hot-toast";

const FamilyBackgroundForm = forwardRef(
  ({ onNext, setLoading, initialValues }, ref) => {
    const [formData, setFormData] = useState({
      marital_status: "",
      children: "",
      want_children: "",
      nationality: "",
      mother_tongue: "",
      languages_known: "",
      country: "",
      city: "",
      ...initialValues,
    });

    const [errors, setErrors] = useState({});

    const mutation = useMutation({
      mutationFn: familyInfoUpdated,
      onMutate: () => setLoading(true),
      onSuccess: () => {
        setLoading(false);
        onNext(formData);
      },
      onError: (error) => {
        setLoading(false);
        toast.error(error?.message)
        console.error("API Error:", error);
        // Optionally display toast
      },
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
      const requiredFields = [
        "marital_status",
        "children",
        "want_children",
        "nationality",
        "mother_tongue",
        "country",
        "city",
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
      <div className="w-3xl mx-auto">
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
            Family & Background
          </h2>
          <p className="text-gray-500 mb-6">
            Tell us about your family and background
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Select Fields */}
              {[
                {
                  name: "marital_status",
                  label: "Marital Status",
                  options: ["Never Married", "Divorced", "Widowed", "Other"],
                },
                {
                  name: "children",
                  label: "Do You Have Children?",
                  options: [
                    "No Children",
                    "1 Child",
                    "2 Children",
                    "3+ Children",
                  ],
                },
                {
                  name: "want_children",
                  label: "Want Children?",
                  options: ["Yes", "No", "Not Sure"],
                },
                {
                  name: "nationality",
                  label: "Nationality",
                  options: [
                    "Afghanistan",
                    "Åland Islands",
                    "Albania",
                    "Algeria",
                    "American Samoa",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antarctica",
                    "Antigua and Barbuda",
                    "Argentina",
                    "Armenia",
                    "Aruba",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia",
                    "Bonaire, Sint Eustatius and Saba",
                    "Bosnia and Herzegovina",
                    "Botswana",
                    "Bouvet Island",
                    "Brazil",
                    "British Indian Ocean Territory",
                    "Brunei Darussalam",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burundi",
                    "Cabo Verde",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Cayman Islands",
                    "Central African Republic",
                    "Chad",
                    "Chile",
                    "China",
                    "Christmas Island",
                    "Cocos (Keeling) Islands",
                    "Colombia",
                    "Comoros",
                    "Congo",
                    "Congo (Democratic Republic)",
                    "Cook Islands",
                    "Costa Rica",
                    "Croatia",
                    "Cuba",
                    "Curaçao",
                    "Cyprus",
                    "Czechia",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "Dominican Republic",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Estonia",
                    "Eswatini",
                    "Ethiopia",
                    "Falkland Islands (Malvinas)",
                    "Faroe Islands",
                    "Fiji",
                    "Finland",
                    "France",
                    "French Guiana",
                    "French Polynesia",
                    "French Southern Territories",
                    "Gabon",
                    "Gambia",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Gibraltar",
                    "Greece",
                    "Greenland",
                    "Grenada",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guernsey",
                    "Guinea",
                    "Guinea-Bissau",
                    "Guyana",
                    "Haiti",
                    "Heard Island and McDonald Islands",
                    "Holy See",
                    "Honduras",
                    "Hong Kong",
                    "Hungary",
                    "Iceland",
                    "India",
                    "Indonesia",
                    "Iran",
                    "Iraq",
                    "Ireland",
                    "Isle of Man",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jersey",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Korea (Democratic People's Republic)",
                    "Korea (Republic)",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Lao People's Democratic Republic",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macao",
                    "Madagascar",
                    "Malawi",
                    "Malaysia",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall Islands",
                    "Martinique",
                    "Mauritania",
                    "Mauritius",
                    "Mayotte",
                    "Mexico",
                    "Micronesia (Federated States of)",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montenegro",
                    "Montserrat",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Namibia",
                    "Nauru",
                    "Nepal",
                    "Netherlands",
                    "New Caledonia",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Niue",
                    "Norfolk Island",
                    "North Macedonia",
                    "Northern Mariana Islands",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau",
                    "Palestine, State of",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Philippines",
                    "Pitcairn",
                    "Poland",
                    "Portugal",
                    "Puerto Rico",
                    "Qatar",
                    "Réunion",
                    "Romania",
                    "Russian Federation",
                    "Rwanda",
                    "Saint Barthélemy",
                    "Saint Helena, Ascension and Tristan da Cunha",
                    "Saint Kitts and Nevis",
                    "Saint Lucia",
                    "Saint Martin (French part)",
                    "Saint Pierre and Miquelon",
                    "Saint Vincent and the Grenadines",
                    "Samoa",
                    "San Marino",
                    "Sao Tome and Principe",
                    "Saudi Arabia",
                    "Senegal",
                    "Serbia",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Sint Maarten (Dutch part)",
                    "Slovakia",
                    "Slovenia",
                    "Solomon Islands",
                    "Somalia",
                    "South Africa",
                    "South Georgia and the South Sandwich Islands",
                    "South Sudan",
                    "Spain",
                    "Sri Lanka",
                    "Sudan",
                    "Suriname",
                    "Svalbard and Jan Mayen",
                    "Sweden",
                    "Switzerland",
                    "Syrian Arab Republic",
                    "Taiwan, Province of China",
                    "Tajikistan",
                    "Tanzania, United Republic of",
                    "Thailand",
                    "Timor-Leste",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Trinidad and Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Turks and Caicos Islands",
                    "Tuvalu",
                    "Uganda",
                    "Ukraine",
                    "United Arab Emirates",
                    "United Kingdom",
                    "United States",
                    "United States Minor Outlying Islands",
                    "Uruguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Venezuela",
                    "Viet Nam",
                    "Virgin Islands (British)",
                    "Virgin Islands (U.S.)",
                    "Wallis and Futuna",
                    "Western Sahara",
                    "Yemen",
                    "Zambia",
                    "Zimbabwe",
                  ],
                },
                {
                  name: "country",
                  label: "Country",
                  options: [
                    "Afghan",
                    "Albanian",
                    "Algerian",
                    "American",
                    "Andorran",
                    "Angolan",
                    "Antiguan and Barbudan",
                    "Argentine",
                    "Armenian",
                    "Australian",
                    "Austrian",
                    "Azerbaijani",
                    "Bahamian",
                    "Bahraini",
                    "Bangladeshi",
                    "Barbadian",
                    "Belarusian",
                    "Belgian",
                    "Belizean",
                    "Beninese",
                    "Bhutanese",
                    "Bolivian",
                    "Bosnian",
                    "Botswanan",
                    "Brazilian",
                    "British",
                    "Bruneian",
                    "Bulgarian",
                    "Burkinabé",
                    "Burmese",
                    "Burundian",
                    "Cabo Verdean",
                    "Cambodian",
                    "Cameroonian",
                    "Canadian",
                    "Central African",
                    "Chadian",
                    "Chilean",
                    "Chinese",
                    "Colombian",
                    "Comoran",
                    "Congolese (Congo-Brazzaville)",
                    "Congolese (Congo-Kinshasa)",
                    "Costa Rican",
                    "Croatian",
                    "Cuban",
                    "Cypriot",
                    "Czech",
                    "Danish",
                    "Djiboutian",
                    "Dominican",
                    "Dominican (Republic)",
                    "Dutch",
                    "East Timorese",
                    "Ecuadorean",
                    "Egyptian",
                    "Emirati",
                    "Equatorial Guinean",
                    "Eritrean",
                    "Estonian",
                    "Ethiopian",
                    "Fijian",
                    "Finnish",
                    "French",
                    "Gabonese",
                    "Gambian",
                    "Georgian",
                    "German",
                    "Ghanaian",
                    "Greek",
                    "Grenadian",
                    "Guatemalan",
                    "Guinean",
                    "Guinea-Bissauan",
                    "Guyanese",
                    "Haitian",
                    "Honduran",
                    "Hungarian",
                    "Icelandic",
                    "Indian",
                    "Indonesian",
                    "Iranian",
                    "Iraqi",
                    "Irish",
                    "Israeli",
                    "Italian",
                    "Ivorian",
                    "Jamaican",
                    "Japanese",
                    "Jordanian",
                    "Kazakh",
                    "Kenyan",
                    "Kiribati",
                    "Kuwaiti",
                    "Kyrgyz",
                    "Laotian",
                    "Latvian",
                    "Lebanese",
                    "Liberian",
                    "Libyan",
                    "Liechtensteiner",
                    "Lithuanian",
                    "Luxembourgish",
                    "Macedonian",
                    "Malagasy",
                    "Malawian",
                    "Malaysian",
                    "Maldivian",
                    "Malian",
                    "Maltese",
                    "Marshallese",
                    "Mauritanian",
                    "Mauritian",
                    "Mexican",
                    "Micronesian",
                    "Moldovan",
                    "Monégasque",
                    "Mongolian",
                    "Montenegrin",
                    "Moroccan",
                    "Mozambican",
                    "Namibian",
                    "Nauruan",
                    "Nepalese",
                    "New Zealander",
                    "Nicaraguan",
                    "Nigerien",
                    "Nigerian",
                    "North Korean",
                    "Norwegian",
                    "Omani",
                    "Pakistani",
                    "Palauan",
                    "Palestinian",
                    "Panamanian",
                    "Papua New Guinean",
                    "Paraguayan",
                    "Peruvian",
                    "Philippine",
                    "Polish",
                    "Portuguese",
                    "Qatari",
                    "Romanian",
                    "Russian",
                    "Rwandan",
                    "Saint Kitts and Nevis",
                    "Saint Lucian",
                    "Saint Vincentian",
                    "Samoan",
                    "San Marinese",
                    "Sao Tomean",
                    "Saudi",
                    "Senegalese",
                    "Serbian",
                    "Seychellois",
                    "Sierra Leonean",
                    "Singaporean",
                    "Slovak",
                    "Slovenian",
                    "Solomon Islander",
                    "Somali",
                    "South African",
                    "South Korean",
                    "South Sudanese",
                    "Spanish",
                    "Sri Lankan",
                    "Sudanese",
                    "Surinamese",
                    "Swazi",
                    "Swedish",
                    "Swiss",
                    "Syrian",
                    "Taiwanese",
                    "Tajik",
                    "Tanzanian",
                    "Thai",
                    "Togolese",
                    "Tongan",
                    "Trinidadian and Tobagonian",
                    "Tunisian",
                    "Turkish",
                    "Turkmen",
                    "Tuvaluan",
                    "Ugandan",
                    "Ukrainian",
                    "Uruguayan",
                    "Uzbek",
                    "Vanuatuan",
                    "Vatican",
                    "Venezuelan",
                    "Vietnamese",
                    "Yemeni",
                    "Zambian",
                    "Zimbabwean",
                    "Other",
                  ],
                },
                {
                  name: "mother_tongue",
                  label: "Mother Tongue",
                  options: [
                    "English",
                    "Arabic",
                    "Bengali",
                    "Hindi",
                    "Japenese",
                    "Mandarin Chinese",
                    "Punjabi",
                    "Portuguese",
                    "Russian",
                    "Spanish",
                    "Other",
                  ],
                },
              ].map(({ name, label, options }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    {label} <span className="text-red-600">*</span>
                  </label>
                  <select
                    name={name}
                    id={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select {label}
                    </option>
                    {options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors[name] && (
                    <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              {/* Input Fields */}
              <div>
                <label
                  htmlFor="languages_known"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Languages Known
                </label>
                <input
                  type="text"
                  name="languages_known"
                  id="languages_known"
                  value={formData.languages_known}
                  onChange={handleChange}
                  placeholder="e.g., English, Arabic, Urdu"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              {["city"].map((name) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name={name}
                    id={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                  {errors[name] && (
                    <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                  )}
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
  }
);

export default FamilyBackgroundForm;
