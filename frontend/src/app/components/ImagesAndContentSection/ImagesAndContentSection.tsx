"use client";

const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
// import Image from "next/image";

// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Style
import "./ImagesAndContentSection.scss";

interface ImageAndContentSectionProps {
  // imageSrc: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  firstTitle?: string;
  firstParagraph?: string;
  secondTitle?: string;
  secondParagraph?: string;
  reverse?: boolean;
  imageSize?: "normal" | "small";
}

function ImagesAndContentSection({
  imageSrc,
  imageAlt,
  firstTitle,
  firstParagraph,
  secondTitle,
  secondParagraph,
  reverse = false,
  imageSize = "normal",
}: ImageAndContentSectionProps) {
  const baseUrl = apiStrapiUrl || "";

  return (
    <div
      className={`image-content-section ${reverse ? "reverse" : ""} ${
        imageSize === "small" ? "small-image" : ""
      }`}
    >
      <div className="image-content-grid">
        <div className="content-image">
          {imageSrc && (
            <Image
              src={imageSrc}
              // src={imageSrc.startsWith("http") ? imageSrc : baseUrl + imageSrc}
              alt={imageAlt}
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="content-text">
          {firstTitle && <h2 className="content-title">{firstTitle}</h2>}

          {firstParagraph && (
            <p className="content-description">{firstParagraph}</p>
          )}

          {secondTitle && <h2 className="content-title">{secondTitle}</h2>}
          {secondParagraph && (
            <p className="content-description">{secondParagraph}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// function ImagesAndContentSection({
//   imageSrc,
//   imageAlt,
//   firstTitle,
//   firstParagraph,
//   secondTitle,
//   secondParagraph,
//   reverse = false,
//   imageSize = "normal",
// }: ImageAndContentSectionProps) {
//   const baseUrl = apiStrapiUrl || "";

//   return (
//     <div
//       className={`image-content-section ${reverse ? "reverse" : ""} ${
//         imageSize === "small" ? "small-image" : ""
//       }`}
//     >
//       <div className="image-content-grid">
//         <div className="content-image">
//           {imageSrc && (
//             <Image
//               src={imageSrc.startsWith("http") ? imageSrc : baseUrl + imageSrc}
//               alt={imageAlt}
//               width={200}
//               height={200}
//             />
//           )}
//         </div>
//         <div className="content-text">
//           <h2 className="content-title">{firstTitle}</h2>

//           {firstParagraph && (
//             <p className="content-description">{firstParagraph}</p>
//           )}

//           <h2 className="content-title">{secondTitle}</h2>
//           {secondParagraph && (
//             <p className="content-description">{secondParagraph}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default ImagesAndContentSection;
