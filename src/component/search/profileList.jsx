// // components/ProfileList.js
// import { useState } from 'react';
// import { FaEye, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function ProfileList({ profiles }) {
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [activeTab, setActiveTab] = useState('about');

//   const closeModal = () => {
//     setSelectedProfile(null);
//     setActiveTab('about');
//   };

//   const calculateAge = (dob) => {
//     if (!dob) return 'N/A';
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   return (
//     <>
//       {/* Profile List */}
//       <div className="space-y-6  mx-auto px-4">
//         {profiles.map((p, i) => {
//           const name = `${p?.personalInfo?.first_name || ''} ${p?.personalInfo?.last_name || ''}`.trim();
//           const age = calculateAge(p?.personalInfo?.date_of_birth);
//           const profession = p?.careerInfo?.occupation || 'Unknown';
//           const education = p?.careerInfo?.education_level || 'N/A';
//           const location = p?.careerInfo?.work_location || p?.familyInfo?.city || 'N/A';
//           const status = p?.familyInfo?.marital_status || 'Single';
//           const sect = p?.religiousInfo?.is_sunni_muslims === 'Yes' ? 'Sunni' : 'Shia';
//           const image = p?.profileImages?.[0]?.image_url || null;

//           return (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 p-6"
//             >
//               <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
//                 {image ? (
//                   <img src={image} alt={name} className="object-cover w-full h-full" />
//                 ) : (
//                   <span className="text-gray-400 text-sm">No Img</span>
//                 )}
//               </div>

//               <div className="flex-1 min-w-0">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {name}, <span className="font-normal text-gray-600">{age}</span>
//                 </h2>
//                 <p className="text-sm text-gray-500 truncate">
//                   {profession} | {education}
//                 </p>
//                 <p className="text-xs text-gray-400 mt-1 truncate">
//                   {status} | <span className="uppercase">{sect}</span>
//                 </p>
//                 {location && (
//                   <p className="text-xs text-gray-400 mt-1 truncate">
//                     <FaMapMarkerAlt className="inline text-red-600 mr-1" />
//                     {location}
//                   </p>
//                 )}
//               </div>

//               <button
//                 onClick={() => setSelectedProfile(p)}
//                 className="ml-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
//               >
//                 <FaEye className="inline mr-2" /> View
//               </button>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedProfile && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//               className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8 relative overflow-y-auto max-h-[90vh]"
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute top-5 right-6 text-3xl font-bold text-gray-400 hover:text-gray-700 transition"
//               >
//                 &times;
//               </button>

//               <h2 className="text-3xl font-bold text-red-700 mb-6 border-b pb-2">
//                 Profile Details
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
//                 <div className="w-full h-64 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
//                   {selectedProfile.profileImages?.[0]?.image_url ? (
//                     <img
//                       src={selectedProfile.profileImages[0].image_url}
//                       className="object-cover w-full h-full"
//                       alt="Profile"
//                     />
//                   ) : (
//                     <span className="text-gray-400 font-semibold">No Image</span>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-semibold">
//                     {selectedProfile.personalInfo?.first_name} {selectedProfile.personalInfo?.last_name}
//                   </h3>
//                   <p className="text-lg text-gray-600">
//                     {calculateAge(selectedProfile.personalInfo?.date_of_birth)} years old
//                   </p>
//                   <p><FaMapMarkerAlt className="inline text-red-600" /> {selectedProfile.careerInfo?.work_location || selectedProfile.familyInfo?.city || 'N/A'}</p>
//                   <p><FaBriefcase className="inline text-red-600" /> {selectedProfile.careerInfo?.occupation || 'N/A'}</p>
//                   <p><FaGraduationCap className="inline text-red-600" /> {selectedProfile.careerInfo?.education_level || 'N/A'}</p>
//                   <p><FaHeart className="inline text-red-600" /> {selectedProfile.familyInfo?.marital_status || 'N/A'}</p>
//                   <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
//                     {selectedProfile.religiousInfo?.is_sunni_muslims === 'Yes' ? 'Sunni' : 'Shia'}
//                   </span>
//                 </div>
//               </div>

//               <nav className="flex border-b space-x-6 mb-6">
//                 {['about', 'preferences', 'lifestyle'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`capitalize pb-2 text-sm font-semibold ${
//                       activeTab === tab
//                         ? 'text-red-600 border-b-2 border-red-600'
//                         : 'text-gray-500 hover:text-red-600'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </nav>

//               <section className="text-gray-700 space-y-4 max-h-[40vh] overflow-y-auto">
//                 {activeTab === 'about' && (
//                   <>
//                     <p><strong>About Me:</strong> {selectedProfile.personalInfo?.about_me || 'No details provided.'}</p>
//                     <p><strong>Health Conditions:</strong> {selectedProfile.personalInfo?.health_conditions || 'N/A'}</p>
//                     <p><strong>Expectations:</strong> {selectedProfile.personalInfo?.expectations || 'N/A'}</p>
//                   </>
//                 )}
//                 {activeTab === 'preferences' && (
//                   <>
//                     <p><strong>Education:</strong> {selectedProfile.preferences?.education || 'N/A'}</p>
//                     <p><strong>Age Range:</strong> {selectedProfile.preferences?.min_age} - {selectedProfile.preferences?.max_age}</p>
//                     <p><strong>Marriage Preferred:</strong> {selectedProfile.preferences?.marriage_preferred || 'N/A'}</p>
//                     <p><strong>Location Preference:</strong> {selectedProfile.preferences?.location || 'N/A'}</p>
//                     <p><strong>Willing to Relocate:</strong> {selectedProfile.preferences?.relocate || 'N/A'}</p>
//                   </>
//                 )}
//                 {activeTab === 'lifestyle' && (
//                   <>
//                     {/* <p><strong>Sunni Muslim:</strong> {selectedProfile.religiousInfo?.is_sunni_muslims || 'N/A'}</p> */}
//                     {/* <p><strong>Revert Muslim:</strong> {selectedProfile.religiousInfo?.is_revert_muslim || 'N/A'}</p> */}
//                     <p><strong>Prayer Frequency:</strong> {selectedProfile.religiousInfo?.prayer_frequency || 'N/A'}</p>
//                     <p><strong>Quran Reading:</strong> {selectedProfile.religiousInfo?.quran_reading || 'N/A'}</p>
//                     <p><strong>Beard:</strong> {selectedProfile.religiousInfo?.beard || 'N/A'}</p>
//                     <p><strong>Hijab:</strong> {selectedProfile.religiousInfo?.hijab || 'N/A'}</p>
//                     {/* <p><strong>Occupation:</strong> {selectedProfile.careerInfo?.occupation || 'N/A'}</p> */}
//                     {/* <p><strong>Annual Income:</strong> {selectedProfile.careerInfo?.annual_income || 'N/A'}</p> */}
//                     <p><strong>Work Location:</strong> {selectedProfile.careerInfo?.work_location || 'N/A'}</p>
//                   </>
//                 )}
//               </section>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// components/ProfileList.js
import { useState } from 'react';
import { FaEye, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DUMMY_IMAGE = 'https://via.placeholder.com/150?text=No+Image';

export default function ProfileList({ profiles }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  const closeModal = () => {
    setSelectedProfile(null);
    setActiveTab('about');
  };

  const calculateAge = (dob) => {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      {/* Profile List */}
      <div className="space-y-6 mx-auto px-4">
        {profiles.map((p, i) => {
          const name = `${p?.personalInfo?.first_name || ''} ${p?.personalInfo?.last_name || ''}`.trim();
          const age = calculateAge(p?.personalInfo?.date_of_birth);
          const profession = p?.careerInfo?.occupation || 'Unknown';
           const gender = p?.personalInfo?.gender || "N/A";
           console.log(gender)
          const education = p?.careerInfo?.education_level || 'N/A';
          const location = p?.careerInfo?.work_location || p?.familyInfo?.city || 'N/A';
          const status = p?.familyInfo?.marital_status || 'Single';
          const sect = p?.religiousInfo?.is_sunni_muslims === 'Yes' ? 'Sunni' : 'Shia';
          const image = p?.profileImages?.[0]?.image_url || DUMMY_IMAGE;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 p-6"
            >
              <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src={
                    gender == "male"
                      ? "/images/MaleProfile.jpeg"
                      : "/images/femaleProfile.png"
                  }
                  alt="Profile"
                  className="object-cover w-full h-full rounded"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  {name}, <span className="font-normal text-gray-600">{age}</span>
                </h2>
                <p className="text-sm text-gray-500 truncate">
                  {profession} | {education}
                </p>
                <p className="text-xs text-gray-400 mt-1 truncate">
                  {status} | <span className="uppercase">{sect}</span>
                </p>
                {location && (
                  <p className="text-xs text-gray-400 mt-1 truncate">
                    <FaMapMarkerAlt className="inline text-red-600 mr-1" />
                    {location}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedProfile(p)}
                className="ml-auto bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
              >
                <FaEye className="inline mr-2" /> View
              </button>
            </motion.div>
          );
        })}
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
                   {selectedProfile.profileImages?.[0]?.image_url ? (
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
                    {selectedProfile.personalInfo?.first_name} {selectedProfile.personalInfo?.last_name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {calculateAge(selectedProfile.personalInfo?.date_of_birth)} years old
                  </p>
                  <p>
                    <FaMapMarkerAlt className="inline text-red-600" />{' '}
                    {selectedProfile.careerInfo?.work_location || selectedProfile.familyInfo?.city || 'N/A'}
                  </p>
                  <p>
                    <FaBriefcase className="inline text-red-600" /> {selectedProfile.careerInfo?.occupation || 'N/A'}
                  </p>
                  <p>
                    <FaGraduationCap className="inline text-red-600" /> {selectedProfile.careerInfo?.education_level || 'N/A'}
                  </p>
                  <p>
                    <FaHeart className="inline text-red-600" /> {selectedProfile.familyInfo?.marital_status || 'N/A'}
                  </p>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {selectedProfile.religiousInfo?.is_sunni_muslims === 'Yes' ? 'Sunni' : 'Shia'}
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

              <section className="text-gray-700 space-y-4 max-h-[40vh] overflow-y-auto">
                {activeTab === 'about' && (
                  <>
                    <p>
                      <strong>About Me:</strong> {selectedProfile.personalInfo?.about_me || 'No details provided.'}
                    </p>
                    <p>
                      <strong>Health Conditions:</strong> {selectedProfile.personalInfo?.health_conditions || 'N/A'}
                    </p>
                    <p>
                      <strong>Expectations:</strong> {selectedProfile.personalInfo?.expectations || 'N/A'}
                    </p>
                  </>
                )}
                {activeTab === 'preferences' && (
                  <>
                    <p>
                      <strong>Education:</strong> {selectedProfile.preferences?.education || 'N/A'}
                    </p>
                    <p>
                      <strong>Age Range:</strong> {selectedProfile.preferences?.min_age} - {selectedProfile.preferences?.max_age}
                    </p>
                    <p>
                      <strong>Marriage Preferred:</strong> {selectedProfile.preferences?.marriage_preferred || 'N/A'}
                    </p>
                    <p>
                      <strong>Location Preference:</strong> {selectedProfile.preferences?.location || 'N/A'}
                    </p>
                    <p>
                      <strong>Willing to Relocate:</strong> {selectedProfile.preferences?.relocate || 'N/A'}
                    </p>
                  </>
                )}
                {activeTab === 'lifestyle' && (
                  <>
                    <p>
                      <strong>Prayer Frequency:</strong> {selectedProfile.religiousInfo?.prayer_frequency || 'N/A'}
                    </p>
                    <p>
                      <strong>Quran Reading:</strong> {selectedProfile.religiousInfo?.quran_reading || 'N/A'}
                    </p>
                    <p>
                      <strong>Beard:</strong> {selectedProfile.religiousInfo?.beard || 'N/A'}
                    </p>
                    <p>
                      <strong>Hijab:</strong> {selectedProfile.religiousInfo?.hijab || 'N/A'}
                    </p>
                    <p>
                      <strong>Work Location:</strong> {selectedProfile.careerInfo?.work_location || 'N/A'}
                    </p>
                  </>
                )}
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

