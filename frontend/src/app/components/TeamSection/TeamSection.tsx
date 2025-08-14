// const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
// import Image from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
// import Card from "../Card/Card";
// import CardContent from "../CardContent/CardContent";

// Style
import "./TeamSection.scss";

// Hook
// import { useAboutpageData } from "@/hooks/useData";

// interface TeamSectionProps {
//   title: string;
// }

function TeamSection() {
  return (
    <section className="team-section">
      <SectionTitle
        title="La famille derrière le club"
        paragraph="On a créé ce qu’on aurait aimé trouver."
        versionWithTextAlign="section-title--version-with-text-align"
      />
      <div className="team-section__members">
        <div className="team-section__member team-section__member--highlight">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X2sQiWzEvr/3e2rx6ul_expires_30_days.png"
            className="team-section__image"
            alt="Team member"
          />
          <div className="team-section__member-info">
            <div className="team-section__member-names">
              <h3 className="team-section__member-name">Full name</h3>
              <span className="team-section__member-job">Job title</span>
            </div>
            {/* <span className="team-section__member-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span> */}
          </div>
        </div>

        <div className="team-section__member team-section__member--highlight">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X2sQiWzEvr/3e2rx6ul_expires_30_days.png"
            className="team-section__image"
            alt="Team member"
          />
          <div className="team-section__member-info">
            <div className="team-section__member-names">
              <h3 className="team-section__member-name">Full name</h3>
              <span className="team-section__member-job">Job title</span>
            </div>
            {/* <span className="team-section__member-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span> */}
          </div>
        </div>

        <div className="team-section__member team-section__member--highlight">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X2sQiWzEvr/3e2rx6ul_expires_30_days.png"
            className="team-section__image"
            alt="Team member"
          />
          <div className="team-section__member-info">
            <div className="team-section__member-names">
              <h3 className="team-section__member-name">Full name</h3>
              <span className="team-section__member-job">Job title</span>
            </div>
            {/* <span className="team-section__member-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

// function TeamSection({ title }: TeamSectionProps) {
//   const aboutpageContent = useAboutpageData();

//   const baseUrl = apiStrapiUrl || "";

//   const teamData = [
//     {
//       id: 1,
//       name: aboutpageContent?.TeamSection.FirstMemberName || "",
//       role: aboutpageContent?.TeamSection.FirstMemberRole || "",
//       bio: aboutpageContent?.TeamSection.FirstMemberBiography || "",
//       photo: aboutpageContent?.TeamSection.FirstMemberPhoto.url || "",
//     },
//     {
//       id: 2,
//       name: aboutpageContent?.TeamSection.SecondMemberName || "",
//       role: aboutpageContent?.TeamSection.SecondMemberRole || "",
//       bio: aboutpageContent?.TeamSection.SecondMemberBiography || "",
//       photo: aboutpageContent?.TeamSection.SecondMemberPhoto.url || "",
//     },
//     {
//       id: 3,
//       name: aboutpageContent?.TeamSection.ThirdMemberName || "",
//       role: aboutpageContent?.TeamSection.ThirdMemberRole || "",
//       bio: aboutpageContent?.TeamSection.ThirdMemberBiography || "",
//       photo: aboutpageContent?.TeamSection.ThirdMemberPhoto.url || "",
//     },
//   ];

//   return (
//     <section className="team-section">
//       <div className="team-section__container">
//         <div className="team-section__header">
//           <SectionTitle
//             title={title}
//             colorVersion="section-title--version-with-orange-color"
//             versionWithTextAlign="section-title--version-with-text-align"
//           />
//         </div>

//         <div className="team-section__grid">
//           {teamData.map((member) => (
//             <Card key={member.id} className="team-section__card">
//               <CardContent className="team-section__card-content">
//                 <div className="team-section__photo-container">
//                   <Image
//                     className="team-section__photo"
//                     src={
//                       member.photo.startsWith("http")
//                         ? member.photo
//                         : baseUrl + member.photo
//                     }
//                     alt=""
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//                 <h3 className="team-section__name">{member.name}</h3>
//                 <p className="team-section__role">{member.role}</p>
//                 <p className="team-section__bio">{member.bio}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
