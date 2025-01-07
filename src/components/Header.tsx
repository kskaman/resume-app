import NavBar from "./NavBar";
import Theme from "./Theme.tsx";

const Header = () => {
  return (
    <header
      className="sticky top-4 
      flex items-center
      pb-6 mb-16 sm:mb-24 md:mb-28 z-10
      px-5 sm:px-8 md:px-12 lg:px-16 xl-px:20"
    >
      <NavBar />
      <Theme />
    </header>
  );
};

export default Header;
