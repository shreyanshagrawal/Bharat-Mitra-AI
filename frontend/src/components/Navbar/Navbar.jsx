import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Languages } from "lucide-react"; // Using lucide-react for icons

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

const languages = [
  "English",
  "हिन्दी",
  "বাংলা",
  "తెలుగు",
  "मराठी",
  "தமிழ்",
  "ગુજરાતી",
  "اردو",
  "ಕನ್ನಡ",
  "ଓଡ଼ିଆ",
  "മലയാളം",
  "ਪੰਜਾਬੀ",
  "অসমীয়া",
  "मैथिली",
  "ᱥᱟᱱᱛᱟᱲᱤ",
  "कॉशुर",
  "नेपाली",
  "कोंकणी",
  "سنڌي",
  "डोगरी",
  "মৈতৈলোন্",
  "बड़ो",
];

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="bg-[#c26128] p-1.5 rounded-full">
          <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">
            ✓
          </div>
        </div>
        <h1 className="text-[#c26128] font-bold text-xl tracking-tight">
          Bharat Mitra AI
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 font-medium text-gray-600">
        <Link to="/" className="text-[#c26128]">
          Home
        </Link>
        <Link to="/" className="hover:text-black transition-colors">
          Services
        </Link>
        <Link to="/" className="hover:text-black transition-colors">
          How it Works
        </Link>
        <Link to="/" className="hover:text-black transition-colors">
          About
        </Link>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all text-gray-700"
          >
            <Languages size={18} className="text-gray-500" />
            <span className="text-sm font-medium">{selectedLang}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isLangOpen && (
            <>
              {/* Invisible backdrop to close dropdown when clicking outside */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsLangOpen(false)}
              ></div>

              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-20 max-h-64 overflow-y-auto py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors
                      ${selectedLang === lang ? "bg-orange-50 text-[#c26128] font-semibold" : "text-gray-700 hover:bg-gray-100"}
                    `}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Login Button */}
        <button className="bg-[#c26128] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#a65222] transition-colors shadow-md active:scale-95">
          Login / Guest
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
