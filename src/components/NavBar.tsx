const NavBar = () => {
  return (
    <nav className="pointer-events-auto w-fit">
      <ul className="px-3 text-sm font-medium rounded-full ring-1 ring-zinc-900/5 shadow-lg flex justify-center space-x-4 bg-white">
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
            href="#stack"
            className="block px-4 py-2 transition hover:text-teal-500 cursor-pointer"
          >
            Stack
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
