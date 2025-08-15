// components/search/ProfileCard.jsx
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfileCard = ({ profile }) => {
  return (
    <motion.div
      className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
          {profile.image ? (
            <img src={profile.image} alt="Profile" className="object-cover w-full h-full rounded" />
          ) : (
            'No Image'
          )}
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">{profile.name}</h2>
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
              {profile.sect}
            </span>
          </div>
          <p className="text-sm text-gray-500">{profile.age} years old</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-400" /> {profile.location}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaBriefcase className="text-gray-400" /> {profile.profession}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaGraduationCap className="text-gray-400" /> {profile.education}
          </p>
          <p className="text-xs text-gray-400 mt-1">{profile.bio}</p>
        </div>
      </div>

      <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex justify-center items-center gap-2 text-sm transition-all">
        <FaEye /> View Profile
      </button>
    </motion.div>
  );
};

export default ProfileCard;
