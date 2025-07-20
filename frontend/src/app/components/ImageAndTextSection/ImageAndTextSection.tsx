// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./ImageAndTextSection.scss";

interface ImageAndTextSectionProps {
  title: string;
  paragraph: string;
  text: string;
  image: StaticImageData;
  // marginVersion: string;
  // buttonVersion: boolean;
  // linkUrl: string;
  withButton?: boolean;
}

function ImageAndTextSection({
  title,
  paragraph,
  text,
  image,
  withButton,
}: ImageAndTextSectionProps) {
  return (
    <section className="image-and-text-section">
      <div className="image-and-text-section__scroll-view">
        <div className="image-and-text-section__row-view">
          <Image src={image} alt="" className="image-and-text-section__image" />
          <div className="image-and-text-section__column">
            <SectionTitle title={title} paragraph={paragraph} />
            <p className="image-and-text-section__text">{text}</p>

            {withButton && (
              <Button text="Découvrez tous les lieux" link="/places" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageAndTextSection;

// function ImageAndTextSection({
//   title,
//   paragraph,
//   image,
//   marginVersion,
//   buttonVersion,
//   linkUrl,
// }: ImageAndTextSectionProps) {
//   const baseUrl = apiStrapiUrl || "";

//   const imageUrl = baseUrl + image;

//   return (
//     <section className={`image-and-text-section ${marginVersion}`}>
//       <h2 className="image-and-text-section__title">{title}</h2>

//       <div className="image-and-text-section__content">
//         {imageUrl ? (
//           <Image
//             src={imageUrl}
//             alt={title || "Test"}
//             width={440}
//             height={600}
//             className="image-and-text-section__content__image"
//           />
//         ) : null}

//         <div className="image-and-text-section__content__texts">
//           <p
//             className="image-and-text-section__content__texts__paragraph"
//             dangerouslySetInnerHTML={{ __html: paragraph }}
//           />
//           {buttonVersion === true && (
//             <Button text="Découvrez tous les lieux" link={linkUrl} />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
