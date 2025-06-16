import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLink } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

const ShareDropdown = ({ showShareMenu, toggleMenu }) => {
  // Function to copy current page link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="relative">
      {/* Share Icon */}
      <p
        className="text-[#000000c9] hover:text-[#862e2e] text-lg cursor-pointer"
        onClick={toggleMenu}
      >
        <FaEllipsisVertical />
      </p>

      {/* Share Dropdown Menu */}
      {showShareMenu && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg p-2 z-10">
          <p className="text-sm font-semibold mb-2">Share:</p>
          <div className="flex flex-col space-y-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-700 hover:text-blue-600"
            >
              <FaFacebookF className="mr-2" /> Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-700 hover:text-blue-400"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-700 hover:text-green-500"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
            <button
              onClick={copyToClipboard}
              className="flex items-center text-sm text-gray-700 hover:text-black"
            >
              <FaLink className="mr-2" /> Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareDropdown;
