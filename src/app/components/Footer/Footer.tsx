// Next element
import Image from "next/image";

// Component
import NavigationMenu from "../NavigationMenu/NavigationMenu";

// Style
import "./Footer.scss";

// Hook
import { useLogoData } from "@/hooks/useData";

function Footer() {
  const LogoContent = useLogoData();

  return (
    <footer className="footer">
      {LogoContent?.[0] && (
        <Image
          src={LogoContent[0].logo_white_version}
          alt=""
          width={200}
          height={200}
        />
      )}
      <NavigationMenu />
    </footer>
  );
}

export default Footer;
