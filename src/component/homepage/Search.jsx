"use client";

import React from "react";

export default function Search() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Search</h2>

      {/* Filters */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <select className="border border-gray-200 rounded-md w-full px-4 py-2 text-sm">
            <option>Age Range</option>
            <option>18-25</option>
            <option>26-30</option>
            <option>31-40</option>
          </select>

          <select className="border border-gray-200 rounded-md w-full px-4 py-2 text-sm">
            <option>Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <select className="border border-gray-200 rounded-md w-full px-4 py-2 text-sm">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md text-sm flex justify-center items-center gap-2">
          🔍 Search Profiles
        </button>
      </div>

      {/* Profiles Grid */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full bg-gray-100"
              />
            </div>
            <h3 className="font-semibold text-lg">{profile.name}</h3>
            <p className="text-sm text-gray-600">
              {profile.age} years old • {profile.gender}
            </p>
            <p className="mt-4 text-sm text-gray-800">
              <strong>About Me</strong><br />
              {profile.about}
            </p>
          </div>
        ))}
      </div>
       <button className="w-[30%] m-auto mt-15 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md text-xl flex justify-center items-center gap-2">
          Sign up Today to see full profile
        </button>
    </section>
  );
}

// Mock data
const profiles = [
  {
    name: "Ahmed Khan",
    age: 28,
    gender: "Male",
    about:
      "Practicing Sunni Muslim who values faith, honesty, and family life. Seeking a pious partner for a halal marriage.",
    image:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-muslim-ramadan-flatart-icons-outline-flatarticons.png",
  },
  {
    name: "Fatima Zahra",
    age: 25,
    gender: "Female",
    about:
      "Modest and respectful sister, committed to Islamic values. Looking for a righteous Sunni Muslim husband.",
    image:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-muslim-woman-ramadan-flatart-icons-outline-flatarticons.png",
  },
  {
    name: "Usman Farooq",
    age: 30,
    gender: "Male",
    about:
      "Sunni Muslim who follows the Sunnah and values sincerity. Wants to build a faith-centered home with a practicing wife.",
    image:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-muslim-ramadan-flatart-icons-outline-flatarticons.png",
  },
];
