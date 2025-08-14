// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
// import Image from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./JoinTheClub.scss";

// interface JoinTheClubSectionProps {
//   title: string;
//   diggerImage: string;
//   diggerTitle: string;
//   diggerText: string;
//   partnerImage: string;
//   partnerTitle: string;
//   partnerText: string;
// }

function JoinTheClub() {
  return (
    <section className="join-the-club">
      <div className="join-the-club__content">
        <SectionTitle
          title="REJOINDRE LE CLUB"
          paragraph="Construisons ensemble un monde plus kids-friendly."
          versionWithTextAlign="section-title--version-with-text-align"
        />

        <div className="join-the-club__cards">
          <div className="join-the-club__card">
            <img
              src="Test"
              className="join-the-club__image"
              alt="Dénicheur.se"
            />
            <div className="join-the-club__card-content">
              <div className="join-the-club__card-content__content">
                <h3 className="join-the-club__card-title">
                  En tant que dénicheur.se
                </h3>
                <span className="join-the-club__card-text">
                  Tu aimes dénicher ou tester des lieux ? <br />
                  Tu as envie de promouvoir les actions du Club des Familles ?
                </span>
              </div>

              <SecondaryButton
                link="/finders"
                label="Rejoindre le club"
                // centerVersion=""
              />
            </div>
          </div>

          <div className="join-the-club__card">
            <img src="" className="join-the-club__image" alt="Dénicheur.se" />
            <div className="join-the-club__card-content">
              <div className="join-the-club__card-content__content">
                <h3 className="join-the-club__card-title">
                  En tant que partenaire
                </h3>
                <span className="join-the-club__card-text">
                  Tu souhaites mettre en avant ton lieu family-friendly auprès
                  de notre communauté ?
                </span>
              </div>

              <SecondaryButton
                link="/restaurants"
                label="Rejoindre le club"
                // centerVersion=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinTheClub;

// function JoinTheClub({
//   title,
//   diggerImage,
//   diggerTitle,
//   diggerText,
//   partnerImage,
//   partnerTitle,
//   partnerText,
// }: JoinTheClubSectionProps) {
//   const baseUrl = apiStrapiUrl || "";

//   const diggerImgUrl = baseUrl + diggerImage;
//   const partnerImgUrl = baseUrl + partnerImage;

//   return (
//     <section className="join-section">
//       <SectionTitle
//         title={title}
//         colorVersion=""
//         versionWithTextAlign="section-title--version-with-text-align"
//       />

//       <div className="join-section__cards">
//         <div className="join-card">
//           <div className="join-card__top">
//             {diggerImgUrl ? (
//               <Image
//                 src={diggerImgUrl}
//                 alt={diggerTitle || "Digger image"}
//                 width={600}
//                 height={600}
//                 className="join-card__image"
//               />
//             ) : null}
//           </div>
//           <div className="join-card__content">
//             <h3 className="join-card__title">{diggerTitle}</h3>
//             <p className="join-card__text">{diggerText}</p>

//             <SecondaryButton
//               link="/finders"
//               label="Rejoindre le club"
//               centerVersion=""
//             />
//           </div>
//         </div>

//         <div className="join-card">
//           <div className="join-card__top">
//             {partnerImgUrl ? (
//               <Image
//                 src={partnerImgUrl}
//                 alt={partnerTitle || "Partner image"}
//                 width={600}
//                 height={600}
//                 className="join-card__image"
//               />
//             ) : null}
//           </div>
//           <div className="join-card__content">
//             <h3 className="join-card__title">{partnerTitle}</h3>
//             <p className="join-card__text">{partnerText}</p>

//             <SecondaryButton
//               link="/restaurants"
//               label="Rejoindre le club"
//               centerVersion=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
