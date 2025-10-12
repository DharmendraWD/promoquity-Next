'use client';

import React, { useState } from 'react';

export default function PopupModal({ description }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <span
        className="text-white cursor-pointer ml-1 flex items-center gap-1"
        onClick={() => setShowPopup(true)}
      >
        View More
      </span>

      {showPopup && (
        <div
          className="fixed inset-0 bg-[#00000087] bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-[#081a3b] rounded-xl border border-dashed border-white/20 px-6 pb-6 pt-2 shadow-lg w-[90%] lg:max-w-[80%] max-w-md animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-red-500"
              >
                X
              </button>
            </div>
            <p className="text-white">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
