import NavBar from "./NavBar";
import Theme from "./Theme.tsx";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-center py-6">
      <NavBar />
      <Theme />
    </header>
  );
};

export default Header;
