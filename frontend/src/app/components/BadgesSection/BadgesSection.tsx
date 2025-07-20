// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./BadgesSection.scss";

// interface BadgesSectionProps {
//   title: string;
//   firstBadgeImage: string;
//   firstBadgeTitle: string;
//   firstBadgeParagraph: string;
//   secondBadgeImage: string;
//   secondBadgeTitle: string;
//   secondBadgeParagraph: string;
//   thirdBadgeImage: string;
//   thirdBadgeTitle: string;
//   thirdBadgeParagraph: string;
//   fourthBadgeImage: string;
//   fourthBadgeTitle: string;
//   fourthBadgeParagraph: string;
// }

interface BadgesSectionProps {
  // title: string;
  firstBadgeImage: StaticImageData;
  // firstBadgeTitle: string;
  // firstBadgeParagraph: string;
  secondBadgeImage: StaticImageData;
  // secondBadgeTitle: string;
  // secondBadgeParagraph: string;
  thirdBadgeImage: StaticImageData;
  // thirdBadgeTitle: string;
  // thirdBadgeParagraph: string;
  fourthBadgeImage: StaticImageData;
  // fourthBadgeTitle: string;
  // fourthBadgeParagraph: string;
}

function BadgesSection({
  firstBadgeImage,
  secondBadgeImage,
  thirdBadgeImage,
  fourthBadgeImage,
}: BadgesSectionProps) {
  return (
    <div className="badges-section">
      <div className="badges-section__content">
        <SectionTitle
          title="Un système de badges uniques"
          paragraph="Parce que chaque famille a ses besoins, on a imaginé un système de badges pour t’aider à repérer en un clin d'œil ce que propose chaque lieu."
          versionWithTextAlign="section-title--version-with-text-align"
        />

        <div className="badges-section__list-container">
          <div className="badges-section__list">
            <div className="badges-section__item">
              <Image
                src={secondBadgeImage}
                alt="Badge 1"
                className="badges-section__image"
              />
              <h3 className="badges-section__item-title">{"badges bébé"}</h3>
              <span className="badges-section__item-description">
                {
                  "Chaise haute, espace pour poussette, table à langer et lieu allaitement-friendly."
                }
              </span>
            </div>
            <div className="badges-section__item">
              <Image
                src={secondBadgeImage}
                alt="Badge 2"
                className="badges-section__image"
              />
              <h3 className="badges-section__item-title">{"badges enfants"}</h3>
              <span className="badges-section__item-description">
                {
                  "Menu enfant (même avec des légumes), coin jeux, jouets, coloriages et plus encore."
                }
              </span>
            </div>
            <div className="badges-section__item">
              <Image
                src={thirdBadgeImage}
                alt="Badge 3"
                className="badges-section__image"
              />
              <h3 className="badges-section__item-title">{"badges adultes"}</h3>
              <span className="badges-section__item-description">
                {
                  "Ouverture dès le matin, anniversaires organisés, terrasse sécurisée, options sans alcool."
                }
              </span>
            </div>
            <div className="badges-section__item">
              <Image
                src={fourthBadgeImage}
                alt="Badge 4"
                className="badges-section__image"
              />
              <h3 className="badges-section__item-title">{"badges valeurs"}</h3>
              <span className="badges-section__item-description">
                {
                  "Bio, recyclage, lieu inclusif pour les familles solo ou recomposées."
                }
              </span>
            </div>
          </div>
          {/* <div className="badges-section__button-container">
            <button
              className="badges-section__button"
              onClick={() => alert("Pressed!")}
            >
              <span className="badges-section__button-text">
                {"Découvrez tous les lieux"}
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BadgesSection;

// function BadgesSection({
//   title,
//   firstBadgeImage,
//   firstBadgeTitle,
//   firstBadgeParagraph,
//   secondBadgeImage,
//   secondBadgeTitle,
//   secondBadgeParagraph,
//   thirdBadgeImage,
//   thirdBadgeTitle,
//   thirdBadgeParagraph,
//   fourthBadgeImage,
//   fourthBadgeTitle,
//   fourthBadgeParagraph,
// }: BadgesSectionProps) {
//   const baseUrl = apiStrapiUrl || "";

//   const firstBadgeImageUrl = baseUrl + firstBadgeImage;
//   const secondBadgeImageUrl = baseUrl + secondBadgeImage;
//   const thirdBadgeImageUrl = baseUrl + thirdBadgeImage;
//   const fourthBadgeImageUrl = baseUrl + fourthBadgeImage;

//   const badges = [
//     {
//       image: firstBadgeImageUrl,
//       title: firstBadgeTitle,
//       description: firstBadgeParagraph,
//     },
//     {
//       image: secondBadgeImageUrl,
//       title: secondBadgeTitle,
//       description: secondBadgeParagraph,
//     },
//     {
//       image: thirdBadgeImageUrl,
//       title: thirdBadgeTitle,
//       description: thirdBadgeParagraph,
//     },
//     {
//       image: fourthBadgeImageUrl,
//       title: fourthBadgeTitle,
//       description: fourthBadgeParagraph,
//     },
//   ];

//   return (
//     <section className="badge-section">
//       <div className="badge-section__container">
//         <SectionTitle
//           title={title}
//           colorVersion="section-title--version-with-white-color"
//           versionWithTextAlign="section-title--version-with-text-align"
//         />
//         <div className="badge-section__container__grid">
//           {badges.map((badge, index) => (
//             <div key={`'badge'-${index}`} className="badge-section__card">
//               <Image
//                 className="badge-section__card__image"
//                 src={badge.image}
//                 alt=""
//                 width={200}
//                 height={200}
//               />

//               <h3 className="badge-section__card-title">{badge.title}</h3>
//               <div className="badge-section__card-description">
//                 {badge.description}
//               </div>
//             </div>
//             // <div key={badge.title} className="badge-section__card">
//             //   <Image
//             //     className="badge-section__card__image"
//             //     src={badge.image}
//             //     alt=""
//             //     width={200}
//             //     height={200}
//             //   />

//             //   <h3 className="badge-section__card-title">{badge.title}</h3>
//             //   <div className="badge-section__card-description">
//             //     {badge.description}
//             //   </div>
//             // </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
