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
  // paragraph: string;
  image: StaticImageData;
  // marginVersion: string;
  // buttonVersion: boolean;
  // linkUrl: string;
  withButton?: boolean;
}

function ImageAndTextSection({
  title,
  image,
  withButton,
}: ImageAndTextSectionProps) {
  return (
    <section className="image-and-text-section">
      <div className="image-and-text-section__scroll-view">
        <div className="image-and-text-section__row-view">
          <Image src={image} alt="" className="image-and-text-section__image" />
          <div className="image-and-text-section__column">
            <SectionTitle title={title} />
            <span className="image-and-text-section__text">
              {
                "Tu as déjà vécu une de ces situations au restaurant ? Enfant affamé, couche qui déborde... Nous aussi ! \n\nC’est pour toutes ces raisons que nous avons créé le Club des Familles, pour te proposer des lieux testés et approuvés en famille pour que ces moments soient le plus agréables possibles."
              }
            </span>

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
