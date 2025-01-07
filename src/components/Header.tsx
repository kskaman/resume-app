import NavBar from "./NavBar";
import Theme from "./Theme.tsx";

const Header = () => {
  return (
    <header
      className="sticky top-0 
      flex items-center justify-center
      pb-6 mb-16 sm:mb-24 md:mb-28 z-10"
    >
      <NavBar />
      <Theme />
    </header>
  );
};

export default Header;
