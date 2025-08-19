// "use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEye,
  FaHeart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileGrid({ profiles }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  const closeModal = () => {
    setSelectedProfile(null);
    setActiveTab("about");
  };

  // Calculate age from DOB string
  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  console.log(selectedProfile?.personalInfo?.gender)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((p, i) => {
        const name = `${p?.personalInfo?.first_name || "No Name"} ${
          p?.personalInfo?.last_name || ""
        }`.trim();
        const age = calculateAge(p?.personalInfo?.date_of_birth);
        const profession = p?.careerInfo?.occupation || "Not specified";
        const education = p?.careerInfo?.education_level || "Not specified";
        const location =
          p?.careerInfo?.work_location || p?.familyInfo?.city || "Unknown";
        const maritalStatus = p?.familyInfo?.marital_status || "N/A";
        const gender = p?.personalInfo?.gender || "N/A";
        const sect =
          p?.religiousInfo?.is_sunni_muslims === "Yes"
            ? "Sunni"
            : p?.religiousInfo?.is_sunni_muslims === "No"
            ? "Shia"
            : "N/A";
        const image = p?.profileImages?.[0]?.image_url || null;
        const about = p?.personalInfo?.about_me || "No bio provided";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100"
          >
            <div className="relative h-44 sm:h-48 bg-gray-100 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                Online
              </span>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {sect}
              </span>
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={
                    gender == "male"
                      ? "/images/MaleProfile.jpeg"
                      : "/images/femaleProfile.png"
                  }
                  alt="Profile"
                  className="object-cover w-full h-full rounded"
                />
              )}
            </div>
            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {name}
                </h2>
                <span className="text-xs text-gray-500">{age} yrs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaHeart className="text-red-500" />
                <span>{maritalStatus}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaBriefcase className="text-gray-500" />
                <span>{profession}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaGraduationCap className="text-gray-500" />
                <span>{education}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{about}</p>
              <button
                onClick={() => setSelectedProfile(p)}
                className="mt-4 cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex justify-center items-center gap-2 text-sm transition-all duration-200"
              >
                <FaEye /> View Profile
              </button>
            </div>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8 relative overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-6 text-3xl font-bold text-gray-400 hover:text-gray-700 transition"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-red-700 mb-6 border-b pb-2">
                Profile Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="w-full h-64 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  {selectedProfile?.profileImages?.[0]?.image_url ? (
                    <img
                      src={selectedProfile.profileImages[0].image_url}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
              src= {selectedProfile?.personalInfo?.gender == "male" ?"/images/MaleProfile.jpeg"  : "/images/femaleProfile.png"} 
              alt="Profile"
              className="object-cover w-full h-full rounded"
            />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">
                    {selectedProfile?.personalInfo?.first_name}{" "}
                    {selectedProfile?.personalInfo?.last_name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {calculateAge(selectedProfile?.personalInfo?.date_of_birth)}{" "}
                    years old
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-600 inline" />{" "}
                    {selectedProfile?.careerInfo?.work_location ||
                      selectedProfile?.familyInfo?.city ||
                      "Unknown"}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaBriefcase className="text-red-600 inline" />{" "}
                    {selectedProfile?.careerInfo?.occupation || "Not specified"}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaGraduationCap className="text-red-600 inline" />{" "}
                    {selectedProfile?.careerInfo?.education_level ||
                      "Not specified"}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaHeart className="text-red-600 inline" />{" "}
                    {selectedProfile?.familyInfo?.marital_status || "N/A"}
                  </p>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {selectedProfile?.religiousInfo?.is_sunni_muslims === "Yes"
                      ? "Sunni"
                      : selectedProfile?.religiousInfo?.is_sunni_muslims === "No"
                      ? "Shia"
                      : "N/A"}
                  </span>
                </div>
              </div>

              <nav className="flex border-b space-x-6 mb-6">
                {["about", "preferences", "lifestyle"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize pb-2 text-sm font-semibold ${
                      activeTab === tab
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              <section className="text-gray-700 space-y-4 max-h-[40vh] overflow-y-auto">
                {activeTab === "about" && (
                  <>
                    <p>
                      <strong>About Me:</strong>{" "}
                      {selectedProfile?.personalInfo?.about_me ||
                        "No details provided."}
                    </p>
                    <p>
                      <strong>Health Conditions:</strong>{" "}
                      {selectedProfile?.personalInfo?.health_conditions || "N/A"}
                    </p>
                    <p>
                      <strong>Expectations:</strong>{" "}
                      {selectedProfile?.personalInfo?.expectations || "N/A"}
                    </p>
                  </>
                )}

                {activeTab === "preferences" && (
                  <>
                    <p>
                      <strong>Education:</strong>{" "}
                      {selectedProfile?.preferences?.education || "N/A"}
                    </p>
                    <p>
                      <strong>Age Range:</strong>{" "}
                      {selectedProfile?.preferences?.min_age} -{" "}
                      {selectedProfile?.preferences?.max_age}
                    </p>
                    <p>
                      <strong>Marriage Preferred:</strong>{" "}
                      {selectedProfile?.preferences?.marriage_preferred || "N/A"}
                    </p>
                    <p>
                      <strong>Location:</strong>{" "}
                      {selectedProfile?.preferences?.location || "N/A"}
                    </p>
                    <p>
                      <strong>Willing to Relocate:</strong>{" "}
                      {selectedProfile?.preferences?.relocate || "N/A"}
                    </p>
                  </>
                )}

                {activeTab === "lifestyle" && (
                  <>
                    {/* <p><strong>Sunni Muslim:</strong> {selectedProfile.religiousInfo?.is_sunni_muslims || "N/A"}</p> */}
                    {/* <p><strong>Revert Muslim:</strong> {selectedProfile.religiousInfo?.is_revert_muslim || "N/A"}</p> */}
                    <p>
                      <strong>Prayer Frequency:</strong>{" "}
                      {selectedProfile?.religiousInfo?.prayer_frequency || "N/A"}
                    </p>
                    <p>
                      <strong>Quran Reading:</strong>{" "}
                      {selectedProfile?.religiousInfo?.quran_reading || "N/A"}
                    </p>
                    <p>
                      <strong>Beard:</strong>{" "}
                      {selectedProfile?.religiousInfo?.beard || "N/A"}
                    </p>
                    <p>
                      <strong>Hijab:</strong>{" "}
                      {selectedProfile?.religiousInfo?.hijab || "N/A"}
                    </p>
                    {/* <p><strong>Occupation:</strong> {selectedProfile.careerInfo?.occupation || "N/A"}</p> */}
                    {/* <p><strong>Annual Income:</strong> {selectedProfile.careerInfo?.annual_income || "N/A"}</p> */}
                    <p>
                      <strong>Work Location:</strong>{" "}
                      {selectedProfile?.careerInfo?.work_location || "N/A"}
                    </p>
                  </>
                )}
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
