import { useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaEye } from "react-icons/fa";
import gsap from "gsap";

const ProfileCard = ({ profile }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Initial fade and scale in
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );

    function handleMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X relative to card
      const y = e.clientY - rect.top; // mouse Y relative to card

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate offset from center normalized between -1 and 1
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;

      // Multiply by max rotation degrees (smaller for subtle effect)
      const rotateX = offsetY * 15; // rotateX based on Y offset
      const rotateY = offsetX * 15; // rotateY based on X offset

      // Elevate shadow and scale slightly for "lifted" effect
      gsap.to(card, {
        rotationX: -rotateX,
        rotationY: rotateY,
        scale: 1.05,
        boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power3.out",
        duration: 0.3,
      });
    }

    function handleMouseLeave() {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        ease: "power3.out",
        duration: 0.6,
      });
    }

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  console.log(profile)

  return (
    <div
      ref={cardRef}
      className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
      style={{ transformStyle: "preserve-3d", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs overflow-hidden">
          {profile.image ? (
            <img
              src={profile?.image}
              alt="Profile"
              className="object-cover w-full h-full rounded"
            />
          ) : (
             <img
              src="/images/MaleProfile.jpeg"
              alt="Profile"
              className="object-cover w-full h-full rounded"
            />
          )}
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">{profile?.name}</h2>
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
              {profile?.sect}
            </span>
          </div>
          <p className="text-sm text-gray-500">{profile?.age} years old</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-400" /> {profile?.location}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaBriefcase className="text-gray-400" /> {profile?.profession}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaGraduationCap className="text-gray-400" /> {profile?.education}
          </p>
          <p className="text-xs text-gray-400 mt-1">{profile?.bio}</p>
        </div>
      </div>

      <button className="mt-4 w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded flex justify-center items-center gap-2 text-sm transition-all">
        <FaEye /> View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
