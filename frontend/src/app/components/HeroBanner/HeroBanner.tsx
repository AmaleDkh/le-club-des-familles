// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./HeroBanner.scss";

interface BannerProps {
  // title: string;
  // subtitle: string;
  image: StaticImageData;
}

function HeroBanner({ image }: BannerProps) {
  return (
    <div className="hero-banner">
      <div className="hero-banner__scroll-view">
        <div className="hero-banner__content">
          <div className="hero-banner__text-group">
            <h1 className="hero-banner__title">
              Fini les galères au restaurant avec les enfants
            </h1>
            <span className="hero-banner__subtitle">
              Des lieux testés et approuvés par les familles, pour que chaque
              sortie soit un moment de bonheur.
            </span>
          </div>

          <Button text="Découvrez tous les lieux" link="/places" />
        </div>

        <Image src={image} className="hero-banner__image" alt="" />
      </div>
    </div>
  );
}

export default HeroBanner;

// interface BannerProps {
//   title: string;
//   subtitle: string;
//   photo: string;
// }

// function HeroBanner({ title, subtitle, photo }: BannerProps) {
//   const baseUrl = apiStrapiUrl || "";

//   const imageUrl = baseUrl + photo;

//   return (
//     <section className="hero-banner">
//       {imageUrl ? (
//         <Image
//           src={imageUrl}
//           alt=""
//           className="hero-banner__image"
//           width={1920}
//           height={1000}
//         />
//       ) : null}

//       <div className="hero-banner__overlay" />
//       <div className="hero-banner__content">
//         <h1 className="hero-banner__title">{title}</h1>
//         <p className="hero-banner__subtitle">{subtitle}</p>
//         <Button
//           text="Découvrez tous les lieux"
//           link="/places"
//           marginAutoVersion=""
//           marginTopVersion=""
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroBanner;
