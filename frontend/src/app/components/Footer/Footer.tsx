// Components
// import Logo from "../Logo/Logo";
// import NavigationMenu from "../NavigationMenu/NavigationMenu";

// Style
import "./Footer.scss";

import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__scroll-view">
        <div className="footer__top">
          <span className="footer__logo">Logo</span>
          {/* <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X2sQiWzEvr/u7nqckva_expires_30_days.png"
            }
            className="footer__logo"
            alt="Logo"
          /> */}
          <div className="footer__nav-links">
            <span className="footer__nav-link">{"Les lieux"}</span>
            <span className="footer__nav-link">{"Rejoindre le club"}</span>
            <span className="footer__nav-link">{"Le concept"}</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} Relume. All right reserved.
          </span>
          <span className="footer__link">{"Privacy Policy"}</span>
          <span className="footer__link">{"Terms of Service"}</span>
          <span className="footer__link footer__link--last">
            {"Cookies Settings"}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer__content">
//         <div className="footer__content__main">
//           <Logo />

//           <NavigationMenu />
//         </div>

//         <span className="footer__content__copyright">
//           © {new Date().getFullYear()} Le Club des Familles. Tous droits
//           réservés.
//         </span>
//       </div>
//     </footer>
//   );
// }
