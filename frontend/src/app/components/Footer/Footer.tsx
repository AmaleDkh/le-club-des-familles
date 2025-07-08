// Components
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

// Style
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__main">
          <Logo />

          <NavigationMenu />
        </div>

        <span className="footer__content__copyright">
          © {new Date().getFullYear()} Le Club des Familles. Tous droits
          réservés.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
