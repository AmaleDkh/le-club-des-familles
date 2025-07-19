"use client";

// Next elements
import Image, { StaticImageData } from "next/image";

// Components
import ImagesAndContentSection from "../ImagesAndContentSection/ImagesAndContentSection";
import Logo from "../Logo/Logo";

// Style
import "./ContentSections.scss";

interface ContentSectionsProps {
  // firstTitle: string;
  // firstParagraph: string;
  firstImage: StaticImageData;
  // secondTitle: string;
  // secondParagraph: string;
  secondImage: StaticImageData;
  // thirdTitle: string;
  // thirdParagraph: string;
  thirdImage: StaticImageData;
  // fourthTitle: StaticImageData;
  // fourthParagraph: string;
  fourthImage: StaticImageData;
}

function ContentSections({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}: ContentSectionsProps) {
  return (
    <section className="content-sections">
      <div className="container">
        <div className="content-part">
          <ImagesAndContentSection
            imageSrc={firstImage}
            imageAlt="Image 1"
            firstTitle={"Titre 1"}
            firstParagraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare."
            }
          />

          <ImagesAndContentSection
            imageSrc={secondImage}
            imageAlt="Image 2"
            secondTitle={"Titre 2"}
            secondParagraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare."
            }
            reverse={true}
            imageSize="small"
          />
        </div>

        <Logo className="logo-center" />

        <div className="content-part">
          <ImagesAndContentSection
            imageSrc={thirdImage}
            imageAlt="Image 3"
            firstTitle={"Titre 3"}
            firstParagraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare."
            }
            imageSize="small"
          />

          <ImagesAndContentSection
            imageSrc={fourthImage}
            imageAlt="Image 4"
            secondTitle={"Titre 4"}
            secondParagraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare."
            }
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

// function ContentSections({
//   firstTitle,
//   firstParagraph,
//   firstImage,
//   secondTitle,
//   secondParagraph,
//   secondImage,
//   thirdTitle,
//   thirdParagraph,
//   thirdImage,
//   fourthTitle,
//   fourthParagraph,
//   fourthImage,
// }: ContentSectionsProps) {
//   return (
//     <section className="content-sections">
//       <div className="container">
//         <div className="content-part">
//           <ImagesAndContentSection
//             imageSrc={firstImage}
//             imageAlt="Image 1"
//             firstTitle={firstTitle}
//             firstParagraph={firstParagraph}
//           />

//           <ImagesAndContentSection
//             imageSrc={secondImage}
//             imageAlt="Image 2"
//             secondTitle={secondTitle}
//             secondParagraph={secondParagraph}
//             reverse={true}
//             imageSize="small"
//           />
//         </div>

//         <Logo className="logo-center" />

//         <div className="content-part">
//           <ImagesAndContentSection
//             imageSrc={thirdImage}
//             imageAlt="Image 3"
//             firstTitle={thirdTitle}
//             firstParagraph={thirdParagraph}
//             imageSize="small"
//           />

//           <ImagesAndContentSection
//             imageSrc={fourthImage}
//             imageAlt="Image 4"
//             secondTitle={fourthTitle}
//             secondParagraph={fourthParagraph}
//             reverse={true}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default ContentSections;
