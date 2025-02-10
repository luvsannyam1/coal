"use client";

import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Popup container */}
      <div className="relative bg-gray-800 text-gray-200 rounded-lg shadow-lg max-w-md w-full p-6 z-10">
        {/* Popup header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        {/* Popup content */}
        <div className="mt-4 overflow-y-scroll" style={{ maxHeight: "80vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
