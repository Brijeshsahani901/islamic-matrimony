// components/ProfileList.js
import { useState } from 'react';
import { FaEye, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfileList({ profiles }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  const closeModal = () => {
    setSelectedProfile(null);
    setActiveTab('about');
  };

  return (
    <>
      {/* Profile List */}
      <div className="space-y-6 max-w-4xl mx-auto px-4">
        {profiles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 p-6"
          >
            <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
              {p.image ? (
                <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-400 text-sm">No Img</span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-gray-800">
                {p.name}, <span className="font-normal text-gray-600">{p.age}</span>
              </h2>
              <p className="text-sm text-gray-500 truncate">
                {p.profession || 'Unknown'} | {p.education || 'N/A'}
              </p>
              <p className="text-xs text-gray-400 mt-1 truncate">
                {p.status || 'Single'} | <span className="uppercase">{p.sect || 'N/A'}</span>
              </p>
              {p.location && (
                <p className="text-xs text-gray-400 mt-1 truncate">
                  <FaMapMarkerAlt className="inline text-red-600 mr-1" />
                  {p.location}
                </p>
              )}
            </div>

            <button
              onClick={() => setSelectedProfile(p)}
              className="ml-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
            >
              <FaEye /> View
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8 relative overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-6 text-3xl font-bold text-gray-400 hover:text-gray-700 transition"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold text-red-700 mb-6 border-b pb-2">
                Profile Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="w-full h-64 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  {selectedProfile.image ? (
                    <img
                      src={selectedProfile.image}
                      className="object-cover w-full h-full"
                      alt="Profile"
                    />
                  ) : (
                    <span className="text-gray-400 font-semibold">No Image</span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{selectedProfile.name}</h3>
                  <p className="text-lg text-gray-600">{selectedProfile.age} years old</p>
                  <p><FaMapMarkerAlt className="inline text-red-600" /> {selectedProfile.location}</p>
                  <p><FaBriefcase className="inline text-red-600" /> {selectedProfile.profession}</p>
                  <p><FaGraduationCap className="inline text-red-600" /> {selectedProfile.education}</p>
                  <p><FaHeart className="inline text-red-600" /> {selectedProfile.status}</p>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {selectedProfile.sect}
                  </span>
                </div>
              </div>

              <nav className="flex border-b space-x-6 mb-6">
                {['about', 'preferences', 'lifestyle'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize pb-2 text-sm font-semibold ${
                      activeTab === tab
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-500 hover:text-red-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              <section className="text-gray-700 space-y-4">
                {activeTab === 'about' && (
                  <>
                    <p><strong>About Me:</strong> {selectedProfile.about || 'No details provided.'}</p>
                    <p><strong>Health Conditions:</strong> {selectedProfile.health || 'N/A'}</p>
                    <p><strong>Expectations:</strong> {selectedProfile.expectations || 'N/A'}</p>
                  </>
                )}
                {activeTab === 'preferences' && (
                  <p>No preference data available.</p>
                )}
                {activeTab === 'lifestyle' && (
                  <p>Prayer: 5 times a day. Hijab: Occasionally. Work: Flexible.</p>
                )}
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
