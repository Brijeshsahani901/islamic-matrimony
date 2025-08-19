// import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

// export default function UserInfoCard({ userProfile }) {
//   console.log(userProfile)
//   const {
//     personalInfo = {
//       first_name: "Your ",
//       last_name: "Name",
//       age: 24,
//       gender: "Other",
//       marital_status: "Divorced",
//       location: "Delhi, India",
//     },
//     careerInfo = {
//       profession: "SEO Specialist",
//       education_level: "Master's Degree",
//     },
//   } = userProfile || {}; // Use fallback object when userProfile is null

//   const fullName = `${personalInfo.first_name} ${personalInfo.last_name}`;
//   const age = personalInfo.age ? `${personalInfo.age} years old` : "Age not set";
//   const gender = personalInfo.gender || "N/A";
//   const maritalStatus = personalInfo.marital_status || "N/A";
//   const location = personalInfo.location || "Unknown location";
//   const profession = careerInfo.profession || "Not specified";
//   const education = careerInfo.education_level || "Not specified";

//   return (
//     <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
//       <div className="flex items-start gap-5">
//         {/* Profile image placeholder */}
//         <div className="w-24 h-24 rounded-full bg-[#f6efea] flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="black"
//             viewBox="0 0 16 16"
//             className="w-16 h-16"
//           >
//             <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
//           </svg>
//         </div>

//         {/* User Info */}
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-xl font-extrabold text-gray-900">{fullName}</h2>
//               <p className="text-sm text-gray-500">{age}</p>
//             </div>

//             <div className="flex gap-2">
//               <span className="text-xs font-semibold px-3 py-1 rounded-full border border-red-500 text-red-600 bg-red-100">
//                 {gender.toLowerCase()}
//               </span>
//               <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-gray-100">
//                 {maritalStatus.toLowerCase()}
//               </span>
//             </div>
//           </div>

//           {/* Info Row */}
//           <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-700">
//             <div className="flex items-center gap-1">
//               <FaMapMarkerAlt className="text-red-500" />
//               <span>{location}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <FaBriefcase className="text-red-500" />
//               <span>{profession}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <FaGraduationCap className="text-red-500" />
//               <span>{education}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

function calculateAge(dobString) {
  if (!dobString) return null;

  const dob = new Date(dobString);
  console.log(dob)
  const today = new Date();
   console.log(today)

  let age = today.getFullYear() - dob.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());


  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}

export default function UserInfoCard({ userProfile }) {
  const {
    personalInfo = {
      first_name: "Your ",
      last_name: "Name",
      gender: "Other",
      marital_status: "Divorced",
      location: "Delhi, India",
      date_of_birth: null,
    },
    careerInfo = {
      profession: "SEO Specialist",
      education_level: "Master's Degree",
    },
  } = userProfile || {};

  const fullName = `${personalInfo?.first_name} ${personalInfo?.last_name}`;
  const ageValue = calculateAge(personalInfo?.date_of_birth);
  const age = ageValue ? `${ageValue} years old` : "Age not set";
  const gender = personalInfo?.gender || "N/A";
  const maritalStatus = personalInfo?.marital_status || "N/A";
  const location = personalInfo?.location || "Unknown location";
  const profession = careerInfo?.profession || "Not specified";
  const education = careerInfo?.education_level || "Not specified";

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
      <div className="flex items-start gap-5">
        {/* Profile image placeholder */}
        <div className="w-24 h-24 rounded-full bg-[#f6efea] flex items-center justify-center">
       <img src={gender == "male" ? "/images/MaleProfile.jpeg" : "/images/femaleProfile.png"} alt="" className="rounded-lg"/>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">{fullName}</h2>
              <p className="text-sm text-gray-500">{age}</p>
            </div>

            <div className="flex gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full border border-red-500 text-red-600 bg-red-100">
                {gender.toLowerCase()}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-gray-100">
                {maritalStatus.toLowerCase()}
              </span>
            </div>
          </div>

          {/* Info Row */}
          <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-red-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBriefcase className="text-red-500" />
              <span>{profession}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGraduationCap className="text-red-500" />
              <span>{education}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
