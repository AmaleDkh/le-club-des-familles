const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
import Image from "next/image";

// Components
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";

// Style
import "./TeamSection.scss";

// Hook
import { useAboutpageData } from "@/hooks/useData";

interface TeamSectionProps {
  title: string;
}

function TeamSection({ title }: TeamSectionProps) {
  const aboutpageContent = useAboutpageData();

  const baseUrl = apiStrapiUrl || "";

  const teamData = [
    {
      id: 1,
      name: aboutpageContent?.TeamSection.FirstMemberName || "",
      role: aboutpageContent?.TeamSection.FirstMemberRole || "",
      bio: aboutpageContent?.TeamSection.FirstMemberBiography || "",
      photo: aboutpageContent?.TeamSection.FirstMemberPhoto.url || "",
    },
    {
      id: 2,
      name: aboutpageContent?.TeamSection.SecondMemberName || "",
      role: aboutpageContent?.TeamSection.SecondMemberRole || "",
      bio: aboutpageContent?.TeamSection.SecondMemberBiography || "",
      photo: aboutpageContent?.TeamSection.SecondMemberPhoto.url || "",
    },
    {
      id: 3,
      name: aboutpageContent?.TeamSection.ThirdMemberName || "",
      role: aboutpageContent?.TeamSection.ThirdMemberRole || "",
      bio: aboutpageContent?.TeamSection.ThirdMemberBiography || "",
      photo: aboutpageContent?.TeamSection.ThirdMemberPhoto.url || "",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-section__container">
        <div className="team-section__header">
          <h2 className="team-section__title">{title}</h2>
        </div>

        <div className="team-section__grid">
          {teamData.map((member) => (
            <Card key={member.id} className="team-section__card">
              <CardContent className="team-section__card-content">
                <div className="team-section__photo-container">
                  <Image
                    className="team-section__photo"
                    src={
                      member.photo.startsWith("http")
                        ? member.photo
                        : baseUrl + member.photo
                    }
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="team-section__name">{member.name}</h3>
                <p className="team-section__role">{member.role}</p>
                <p className="team-section__bio">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
