import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative">
      {isSearchOpen ? (
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-md px-3 py-1 w-40 transition-all duration-300 ease-in-out focus:w-56 focus:ring focus:ring-red-400"
          onBlur={() => setIsSearchOpen(false)} // Close when clicking outside
          autoFocus
        />
      ) : (
        <FaSearch
          className="text-gray-600 cursor-pointer hover:text-[#862e2e] transition-colors duration-200"
          size={18}
          onClick={() => setIsSearchOpen(true)}
        />
      )}
    </div>
  );
};

export default SearchBar;
