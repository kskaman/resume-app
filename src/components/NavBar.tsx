const NavBar = () => {
  return (
    <nav className="pointer-events-auto w-fit ">
      <ul
        className="px-3 
        text-sm text-zinc-800 dark:text-zinc-200 
        font-medium rounded-full
        bg-white/90 dark:bg-zinc-800/90 
        ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10
        shadow-lg
        flex justify-center space-x-4"
      >
        <li>
          <a
            href="#about"
            className="block px-4 py-2 transition hover:text-teal-500 cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block px-4 py-2 transition hover:text-teal-500 cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="block px-4 py-2 transition hover:text-teal-500 cursor-pointer"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#uses"
            className="block px-4 py-2 transition hover:text-teal-500 cursor-pointer"
          >
            Uses
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
