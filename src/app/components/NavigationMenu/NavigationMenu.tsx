"use client";

// Next & React elements
import Link from "next/link";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/places">
            LES LIEUX
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/about">
            LE CONCEPT
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/club">
            REJOINDRE LE CLUB
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
