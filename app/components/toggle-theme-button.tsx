"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleThemeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.cookie.includes("theme=dim"));
  }, [])

  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dim" : "pastel");
    // change html data-theme
    document.cookie = `theme=${isDark ? "dim" : "pastel"}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", isDark ? "dim" : "pastel");
  }, [isDark]);

  return (
    <button className="btn btn-sm btn-link text-yellow-500" onClick={toggleTheme}>
      {isDark ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ default: { type: "spring", stiffness: 100 }, opacity: { ease: "linear" } }}
        >
          <FaMoon size={24} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          animate={{ opacity: 1, scale: 1, rotate: -90 }}
          transition={{ default: { type: "spring", stiffness: 100 }, opacity: { ease: "linear" } }}
        >
          <FaSun size={24} />
        </motion.div>
      )}
    </button>
  );
}