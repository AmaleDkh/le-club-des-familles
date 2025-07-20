// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// React & Nexts elements
import { Star } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./ReviewsSection.scss";

// Hook
// import { useHomepageData } from "@/hooks/useData";

// interface ReviewsSectionProps {
//   title: string;
// }

interface ReviewsSectionProps {
  // title: string;
  image: StaticImageData;
}

function ReviewsSection({ image }: ReviewsSectionProps) {
  return (
    <section className="reviews-section">
      <div className="reviews-section__scroll-view">
        <SectionTitle
          title="L’avis des familles"
          paragraph="Des parents, comme toi, qui ont testé nos lieux et partagent leurs expériences."
          versionWithTextAlign="section-title--version-with-text-align"
        />
        <div className="reviews-section__columns">
          <div className="reviews-section__column">
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
            <div className="reviews-section__review">
              <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="star-icon filled" />
                ))}
              </div>
              <span className="reviews-section__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </span>
              <div className="reviews-section__review-author">
                <Image
                  src={image}
                  alt="Photo du reviewer"
                  className="reviews-section__author-photo"
                />
                <div className="reviews-section__author-info">
                  <span className="reviews-section__author-name">
                    Prénom + nom
                  </span>
                  <span className="reviews-section__author-location">
                    Location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;

// function ReviewsSection({ title }: ReviewsSectionProps) {
//   const homepageContent = useHomepageData();

//   const baseUrl = apiStrapiUrl || "";

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         size={16}
//         className={index < rating ? "star-filled" : "star-empty"}
//         fill={index < rating ? "#FFF200" : "none"}
//         color={index < rating ? "#FFF200" : "#D1D5DB"}
//       />
//     ));
//   };

//   const reviewsData = [
//     {
//       id: 1,
//       name: homepageContent?.Reviews.FirstReviewerName || "",
//       rating: homepageContent?.Reviews.FirstReviewerRating || 0,
//       comment: homepageContent?.Reviews.FirstReviewerComment || "",
//       photo: homepageContent?.Reviews.FirstReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.FirstReviewerLocation || "",
//     },
//     {
//       id: 2,
//       name: homepageContent?.Reviews.SecondReviewerName || "",
//       rating: homepageContent?.Reviews.SecondReviewerRating || 0,
//       comment: homepageContent?.Reviews.SecondReviewerComment || "",
//       photo: homepageContent?.Reviews.SecondReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.SecondReviewerLocation || "",
//     },
//     {
//       id: 3,
//       name: homepageContent?.Reviews.ThirdReviewerName || "",
//       rating: homepageContent?.Reviews.ThirdReviewerRating || 0,
//       comment: homepageContent?.Reviews.ThirdReviewerComment || "",
//       photo: homepageContent?.Reviews.ThirdReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.ThirdReviewerLocation || "",
//     },
//     {
//       id: 4,
//       name: homepageContent?.Reviews.FourthReviewerName || "",
//       rating: homepageContent?.Reviews.FourthReviewerRating || 0,
//       comment: homepageContent?.Reviews.FourthReviewerComment || "",
//       photo: homepageContent?.Reviews.FourthReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.FourthReviewerLocation || "",
//     },
//     {
//       id: 5,
//       name: homepageContent?.Reviews.FifthReviewerName || "",
//       rating: homepageContent?.Reviews.FifthReviewerRating || 0,
//       comment: homepageContent?.Reviews.FifthReviewerComment || "",
//       photo: homepageContent?.Reviews.FifthReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.FifthReviewerLocation || "",
//     },
//     {
//       id: 6,
//       name: homepageContent?.Reviews.SixthReviewerName || "",
//       rating: homepageContent?.Reviews.SixthReviewerRating || 0,
//       comment: homepageContent?.Reviews.SixthReviewerComment || "",
//       photo: homepageContent?.Reviews.SixthReviewerPhoto?.url || "",
//       location: homepageContent?.Reviews.SixthReviewerLocation || "",
//     },
//   ];

//   return (
//     <section className="reviews-section">
//       <div className="reviews-section__container">
//         <div className="reviews-section__header">
//           <SectionTitle
//             title={title}
//             colorVersion="section-title--version-with-orange-color"
//             versionWithTextAlign="section-title--version-with-text-align"
//           />
//         </div>

//         <div className="reviews-section__grid">
//           {reviewsData.map((review) => (
//             <div key={review.id} className="reviews-section__card">
//               <div className="reviews-section__card-content">
//                 <div className="reviews-section__rating">
//                   {renderStars(review.rating)}
//                 </div>
//                 <p className="reviews-section__comment">{review.comment}</p>
//                 <div className="reviews-section__author">
//                   {review.photo && (
//                     <Image
//                       src={
//                         review.photo.startsWith("http")
//                           ? review.photo
//                           : baseUrl + review.photo
//                       }
//                       alt=""
//                       width={200}
//                       height={200}
//                       className="reviews-section__avatar"
//                     />
//                   )}

//                   <div className="reviews-section__author-info">
//                     <h4 className="reviews-section__author-name">
//                       {review.name}
//                     </h4>
//                     {review.location && (
//                       <p className="reviews-section__author-location">
//                         {review.location}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
