import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle menu button handler
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu if user clicks outside it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex md:hidden ml-auto pointer-events-auto">
        <nav ref={menuRef} className=" w-fit  relative">
          <div
            className="bg-white/90 dark:bg-zinc-800
          text-zinc-800 dark:text-zinc-200 rounded-full
          ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10
          shadow-lg"
          >
            <button
              className="px-4 py-2.5 text-sm font-medium 
            flex items-center justify-center gap-2"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              Menu
              {isMenuOpen ? (
                <MdOutlineKeyboardArrowUp size={16} />
              ) : (
                <MdOutlineKeyboardArrowDown size={16} />
              )}
            </button>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <ul
              className="
              absolute top-full right-0 w-[128px]
              bg-white dark:bg-zinc-800
              shadow-lg mt-2 rounded-lg
              flex flex-col items-center space-y-2
              text-zinc-800 dark:text-zinc-200
              py-3
            "
            >
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 transition cursor-pointer ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 transition cursor-pointer ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 transition cursor-pointer ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/uses"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 transition cursor-pointer ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  Uses
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>

      <div className="hidden md:flex pointer-events-auto w-full justify-center">
        <nav className="">
          <ul
            className="px-3 text-sm font-medium rounded-full
                  text-zinc-800 dark:text-zinc-200 
                  bg-white/90 dark:bg-zinc-800/90
                  ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10
                  shadow-lg flex justify-center space-x-4"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative block px-4 py-2.5 transition cursor-pointer ${
                    isActive
                      ? /* Active styles */
                        `text-teal-500 after:content-[''] after:absolute
                    after:inset-x-1 after:-bottom-px after:h-[2px]
                    after:bg-gradient-to-r after:from-teal-500/0 
                    after:via-teal-500/40 after:to-teal-500/0`
                      : /* Inactive (hover) styles */
                        `hover:text-teal-500`
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `relative block px-4 py-2.5 transition cursor-pointer ${
                    isActive
                      ? /* Active styles */
                        `text-teal-500 after:content-[''] after:absolute
                    after:inset-x-1 after:-bottom-px after:h-[2px]
                    after:bg-gradient-to-r after:from-teal-500/0 
                    after:via-teal-500/40 after:to-teal-500/0`
                      : /* Inactive (hover) styles */
                        `hover:text-teal-500`
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  `relative block px-4 py-2.5 transition cursor-pointer ${
                    isActive
                      ? /* Active styles */
                        `text-teal-500 after:content-[''] after:absolute
                    after:inset-x-1 after:-bottom-px after:h-[2px]
                    after:bg-gradient-to-r after:from-teal-500/0 
                    after:via-teal-500/40 after:to-teal-500/0`
                      : /* Inactive (hover) styles */
                        `hover:text-teal-500`
                  }`
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uses"
                className={({ isActive }) =>
                  `relative block px-4 py-2.5 transition cursor-pointer ${
                    isActive
                      ? /* Active styles */
                        `text-teal-500 after:content-[''] after:absolute
                    after:inset-x-1 after:-bottom-px after:h-[2px]
                    after:bg-gradient-to-r after:from-teal-500/0 
                    after:via-teal-500/40 after:to-teal-500/0`
                      : /* Inactive (hover) styles */
                        `hover:text-teal-500`
                  }`
                }
              >
                Uses
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
