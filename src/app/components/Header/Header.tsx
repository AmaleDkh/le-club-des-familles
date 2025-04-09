// Components
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Button from "../Button/Button";

// Style
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__navigation-part">
        <NavigationMenu />
        <Button text="LOREM IPSUM" link="" />
      </div>
    </header>
  );
}

export default Header;
