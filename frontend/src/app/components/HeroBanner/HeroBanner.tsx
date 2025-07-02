// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./HeroBanner.scss";

interface BannerProps {
  photo: string;
}

function HeroBanner({ photo }: BannerProps) {
  return (
    <section className="hero-banner">
      <Image
        src={photo}
        alt=""
        className="hero-banner__image"
        width={1920}
        height={1000}
      />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">
          Découvrez les meilleurs lieux family-friendly
        </h1>
        <p className="hero-banner__subtitle">
          Rejoignez notre communauté de dénicheurs et partagez vos découvertes
        </p>
        <Button
          text="DÉCOUVREZ TOUS LES LIEUX"
          link="/places"
          marginAutoVersion=""
          marginTopVersion=""
        />
      </div>
    </section>
  );
}

export default HeroBanner;
