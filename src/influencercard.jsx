// InfluencerCard.jsx

import React from "react";

const InfluencerCard = ({ influencer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <img
        src={influencer.image}
        //alt={influencer.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{influencer.name}</h3>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          {/* Instagram icon */}
          <svg
            className="w-5 h-5 text-pink-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.25-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span>{influencer.instagramFollowers}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          {/* YouTube icon */}
          <svg
            className="w-5 h-5 text-red-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-1C16.7 4.7 12 4.7 12 4.7s-4.7 0-7 .3c-.4 0-1.3.2-2 1-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.8 2 1 2.3.3 7 .3 7 .3s4.7 0 7-.3c.4 0 1.3-.2 2-1 .6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8zM10 14.5v-5l5 2.5-5 2.5z" />
          </svg>
          <span>{influencer.youtubeFollowers}</span>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;

