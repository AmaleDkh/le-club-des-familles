const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next elements
import Image from "next/image";
import Link from "next/link";

// Hook
import { useLogoData } from "@/hooks/useData";

// Style
import "./Logo.scss";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  const baseUrl = apiStrapiUrl || "";

  const logoContent = useLogoData();

  return (
    <Link href="/" className={className}>
      {logoContent?.Logo?.url && (
        <Image
          src={
            logoContent.Logo.url.startsWith("http")
              ? logoContent.Logo.url
              : baseUrl + logoContent.Logo.url
          }
          alt="Logo du Club des Familles"
          width={200}
          height={200}
        />
      )}
    </Link>
  );
}

export default Logo;
