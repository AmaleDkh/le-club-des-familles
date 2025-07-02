// Next element
import Image from "next/image";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./BadgesSection.scss";

interface BadgesSectionProps {
  title: string;
  firstBadgeImage: string;
  firstBadgeTitle: string;
  firstBadgeParagraph: string;
  secondBadgeImage: string;
  secondBadgeTitle: string;
  secondBadgeParagraph: string;
  thirdBadgeImage: string;
  thirdBadgeTitle: string;
  thirdBadgeParagraph: string;
  fourthBadgeImage: string;
  fourthBadgeTitle: string;
  fourthBadgeParagraph: string;
}

function BadgesSection({
  title,
  firstBadgeImage,
  firstBadgeTitle,
  firstBadgeParagraph,
  secondBadgeImage,
  secondBadgeTitle,
  secondBadgeParagraph,
  thirdBadgeImage,
  thirdBadgeTitle,
  thirdBadgeParagraph,
  fourthBadgeImage,
  fourthBadgeTitle,
  fourthBadgeParagraph,
}: BadgesSectionProps) {
  const badges = [
    {
      image: firstBadgeImage,
      title: firstBadgeTitle,
      description: firstBadgeParagraph,
    },
    {
      image: secondBadgeImage,
      title: secondBadgeTitle,
      description: secondBadgeParagraph,
    },
    {
      image: thirdBadgeImage,
      title: thirdBadgeTitle,
      description: thirdBadgeParagraph,
    },
    {
      image: fourthBadgeImage,
      title: fourthBadgeTitle,
      description: fourthBadgeParagraph,
    },
  ];

  return (
    <section className="badge-section">
      <div className="badge-section__container">
        <SectionTitle
          title={title}
          colorVersion="section-title--version-with-white-color"
          versionWithTextAlign="section-title--version-with-text-align"
        />
        <div className="badge-section__container__grid">
          {badges.map((badge) => (
            <div key={badge.title} className="badge-section__card">
              <Image
                className="badge-section__card__image"
                src={badge.image}
                alt=""
                width={200}
                height={200}
              />

              <h3 className="badge-section__card-title">{badge.title}</h3>
              <div className="badge-section__card-description">
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BadgesSection;
