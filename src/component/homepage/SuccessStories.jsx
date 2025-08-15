"use client";

import React from "react";

export default function SuccessStories() {
  const videos = [
    {
      id: 1,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      url: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const testimonials = [
    {
      stars: 5,
      text: `"We found each other through WIFE4LIFE and got married 6 months later. The platform made it easy to find someone with similar values."`,
      name: "Ahmed & Fatima",
      location: "London, UK",
    },
    {
      stars: 5,
      text: `"After trying other platforms, WIFE4LIFE was different. The detailed profiles helped us understand compatibility before meeting."`,
      name: "Omar & Aisha",
      location: "Toronto, Canada",
    },
    {
      stars: 5,
      text: `"We're grateful for this platform bringing us together. The respectful environment made the process comfortable for both families."`,
      name: "Yusuf & Maryam",
      location: "Sydney, Australia",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      {/* Video Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {videos.map((video) => (
          <video
            key={video.id}
            src={video.url}
            controls
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        ))}
      </div>

      {/* Success Stories */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Success Stories
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-red-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="text-yellow-500 mb-2">
              {"★".repeat(item.stars)}
            </div>
            <p className="italic text-gray-700 mb-4"> {item.text} </p>
            <p className="font-semibold text-red-700">{item.name}</p>
            <p className="text-sm text-gray-600">{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
