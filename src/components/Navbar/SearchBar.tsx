"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-300 rounded-full px-3 py-1 max-w-md w-full mx-6 flex-grow md:flex-grow-0"
    >
      <input
        type="text"
        placeholder="Search products, categories..."
        className="outline-none px-2 text-gray-700 flex-grow"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="text-gray-600 hover:text-indigo-600 transition">
        <FiSearch size={16} />
      </button>
    </form>
  );
}
