"use client";

// React & Next elements
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

// Components
// import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Button from "../Button/Button";

// Style
import "./Header.scss";

// Hook
import { useLogoData } from "@/hooks/useData";

function Header() {
  const LogoContent = useLogoData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        {LogoContent?.[0] && (
          <Link href="/">
            <Image
              src={LogoContent[0].logo_white_version}
              alt=""
              width={200}
              height={200}
            />
          </Link>
        )}

        <div className="header__nav__desktop-menu">
          <Link href="/places" className="header__nav__desktop-menu__link">
            LES LIEUX
          </Link>
          <Link href="/about" className="header__nav__desktop-menu__link">
            LE CONCEPT
          </Link>
          <Link href="/club" className="header__nav__desktop-menu__link">
            REJOINDRE LE CLUB
          </Link>

          <Button
            text="@LECLUBDESFAMILLES"
            link="/contact"
            marginAutoVersion=""
            marginTopVersion=""
          />
        </div>

        <button
          className="header__nav__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`header__nav__mobile-menu ${
          mobileMenuOpen ? "header__nav__mobile-menu--open" : ""
        }`}
      >
        <button
          className="header__nav__mobile-menu__mobile-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <Link
          href="/places"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          LES LIEUX
        </Link>
        <Link
          href="/about"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          LE CONCEPT
        </Link>
        <Link
          href="/club"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          REJOINDRE LE CLUB
        </Link>

        <Button
          text="@LECLUBDESFAMILLES"
          link="/contact"
          marginAutoVersion=""
          marginTopVersion=""
        />
      </div>
    </header>
  );
}

export default Header;
