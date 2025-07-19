// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// React & Next elements
import Image, { StaticImageData } from "next/image";
// import { Star, Heart } from "lucide-react";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./TwoSameImagesAndTextSection.scss";

interface TwoSameImagesAndTextSectionProps {
  // title: string;
  // paragraph: string;
  // leftImageUrl: string;
  // rightImageUrl: string;
  image: StaticImageData;
}

function TwoSameImagesAndTextSection({
  image,
}: // title,
// // paragraph,
// // leftImageUrl,
// // rightImageUrl,
TwoSameImagesAndTextSectionProps) {
  // const baseUrl = apiStrapiUrl || "";

  return (
    <section className="two-same-images-and-text-section">
      <div className="two-same-images-and-text-section__container">
        <div className="two-same-images-and-text-section__left">
          <div className="two-same-images-and-text-section__image-wrapper two-same-images-and-text-section__image-wrapper--left">
            <Image
              src={image}
              // src={
              //   leftImageUrl.startsWith("http")
              //     ? leftImageUrl
              //     : baseUrl + leftImageUrl
              // }
              alt={"Image 1"}
              width={2000}
              height={2000}
              className="two-same-images-and-text-section__image"
            />
          </div>
          {/* <div className="two-same-images-and-text-section__icon two-same-images-and-text-section__icon--bottom">
            <Star size={32}  />
          </div> */}
        </div>

        <div className="two-same-images-and-text-section__content">
          <SectionTitle
            title="Le rôle de dénicheur.se"
            colorVersion="section-title--version-with-orange-color"
            versionWithTextAlign="section-title--version-with-text-align"
          />
          <p className="two-same-images-and-text-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duiscursus, mi quis viverra
            ornare.
          </p>
        </div>

        <div className="two-same-images-and-text-section__right">
          {/* <div className="two-same-images-and-text-section__icon two-same-images-and-text-section__icon--top">
            <Heart size={32} />
          </div> */}
          <div className="two-same-images-and-text-section__image-wrapper two-same-images-and-text-section__image-wrapper--right">
            <Image
              src={image}
              // src={
              //   rightImageUrl.startsWith("http")
              //     ? rightImageUrl
              //     : baseUrl + rightImageUrl
              // }
              alt={"Image 1"}
              width={2000}
              height={2000}
              className="two-same-images-and-text-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// function TwoSameImagesAndTextSection({
//   title,
//   paragraph,
//   leftImageUrl,
//   rightImageUrl,
// }: TwoSameImagesAndTextSectionProps) {
//   const baseUrl = apiStrapiUrl || "";

//   return (
//     <section className="two-same-images-and-text-section">
//       <div className="two-same-images-and-text-section__container">
//         <div className="two-same-images-and-text-section__left">
//           <div className="two-same-images-and-text-section__image-wrapper two-same-images-and-text-section__image-wrapper--left">
//             <Image
//               src={
//                 leftImageUrl.startsWith("http")
//                   ? leftImageUrl
//                   : baseUrl + leftImageUrl
//               }
//               alt={"Image 1"}
//               width={2000}
//               height={2000}
//               className="two-same-images-and-text-section__image"
//             />
//           </div>
//           {/* <div className="two-same-images-and-text-section__icon two-same-images-and-text-section__icon--bottom">
//             <Star size={32}  />
//           </div> */}
//         </div>

//         <div className="two-same-images-and-text-section__content">
//           <SectionTitle
//             title={title}
//             colorVersion="section-title--version-with-orange-color"
//             versionWithTextAlign="section-title--version-with-text-align"
//           />
//           <p className="two-same-images-and-text-section__description">
//             {paragraph}
//           </p>
//         </div>

//         <div className="two-same-images-and-text-section__right">
//           {/* <div className="two-same-images-and-text-section__icon two-same-images-and-text-section__icon--top">
//             <Heart size={32} />
//           </div> */}
//           <div className="two-same-images-and-text-section__image-wrapper two-same-images-and-text-section__image-wrapper--right">
//             <Image
//               src={
//                 rightImageUrl.startsWith("http")
//                   ? rightImageUrl
//                   : baseUrl + rightImageUrl
//               }
//               alt={"Image 1"}
//               width={2000}
//               height={2000}
//               className="two-same-images-and-text-section__image"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default TwoSameImagesAndTextSection;
