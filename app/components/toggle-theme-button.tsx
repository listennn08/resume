"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleThemeButton() {
  const [isDark, setIsDark] = useState(false);
  const systemTheme = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false

  useEffect(() => {
    if (document.cookie.includes("theme=")) {
      const theme = document.cookie.split("theme=")[1].split(";")[0] as "dark" | "light";
      setTheme(theme);
    }

    setIsDark(systemTheme);
  }, []);

  const setTheme = (theme: "dark" | "light") => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", theme);
    setIsDark(theme === "dark");
  }
  const toggleTheme = () => setTheme(!isDark ? "dark" : "light");

  return (
    <button className="btn btn-sm btn-link text-yellow-500" onClick={toggleTheme}>
      {isDark ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ default: { type: "spring", stiffness: 100 }, opacity: { ease: "linear" } }}
        >
          <FaMoon size={16} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          animate={{ opacity: 1, scale: 1, rotate: -90 }}
          transition={{ default: { type: "spring", stiffness: 100 }, opacity: { ease: "linear" } }}
        >
          <FaSun size={16} />
        </motion.div>
      )}
    </button>
  );
}