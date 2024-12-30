import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="px-3 py-2 
        cursor-pointer 
        flex items-center 
        ring-1 ring-zinc-900/5 shadow-lg rounded-full 
        text-sm
        hover:text-teal-500
        absolute right-4 mr-8"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
    >
      {!isDarkMode ? (
        <span className="material-symbols-outlined">light_mode</span>
      ) : (
        <span className="material-symbols-outlined">dark_mode</span>
      )}
    </button>
  );
};

export default Theme;
