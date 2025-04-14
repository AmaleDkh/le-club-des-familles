// Next element
import Image from "next/image";

// Components
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Button from "../Button/Button";

// Style
import "./Header.scss";

// Hook
import { useLogoData } from "@/hooks/useData";

function Header() {
  const LogoContent = useLogoData();

  return (
    <header className="header">
      {LogoContent?.[0] && (
        <Image
          src={LogoContent[0].logo_white_version}
          alt=""
          width={200}
          height={200}
        />
      )}
      <div className="header__navigation-part">
        <NavigationMenu />
        <Button text="LOREM IPSUM" link="" marginAutoVersion="" />
      </div>
    </header>
  );
}

export default Header;
