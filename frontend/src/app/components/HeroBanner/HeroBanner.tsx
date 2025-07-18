const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./HeroBanner.scss";

interface BannerProps {
  title: string;
  subtitle: string;
  photo: string;
}

function HeroBanner({ title, subtitle, photo }: BannerProps) {
  const baseUrl = apiStrapiUrl || "";

  const imageUrl = baseUrl + photo;

  return (
    <section className="hero-banner">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          className="hero-banner__image"
          width={1920}
          height={1000}
        />
      ) : null}

      <div className="hero-banner__overlay" />
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">{title}</h1>
        <p className="hero-banner__subtitle">{subtitle}</p>
        <Button
          text="Découvrez tous les lieux"
          link="/places"
          marginAutoVersion=""
          marginTopVersion=""
        />
      </div>
    </section>
  );
}

export default HeroBanner;
