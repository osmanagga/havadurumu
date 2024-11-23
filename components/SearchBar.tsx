import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'react-feather';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Şehir ara..."
          className="w-full p-4 pr-12 text-lg bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white placeholder-opacity-70"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-70 hover:opacity-100 focus:outline-none"
        >
          <Search size={24} />
        </button>
      </div>
    </motion.form>
  );
}

