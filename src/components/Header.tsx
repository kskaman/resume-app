import NavBar from "./NavBar";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="sticky top-0 md-shadow flex ">
      <NavBar />
      <Theme />
    </header>
  );
};

export default Header;
