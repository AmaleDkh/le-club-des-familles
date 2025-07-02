// Next element
import Image from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./JoinTheClub.scss";

interface JoinTheClubSectionProps {
  title: string;
  diggerImage: string;
  diggerTitle: string;
  diggerText: string;
  partnerImage: string;
  partnerTitle: string;
  partnerText: string;
}

function JoinTheClub({
  title,
  diggerImage,
  diggerTitle,
  diggerText,
  partnerImage,
  partnerTitle,
  partnerText,
}: JoinTheClubSectionProps) {
  return (
    <section className="join-section">
      <SectionTitle
        title={title}
        colorVersion=""
        versionWithTextAlign="section-title--version-with-text-align"
      />

      <div className="join-section__cards">
        <div className="join-card">
          <div className="join-card__top">
            <Image
              className="join-card__image"
              src={diggerImage}
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div className="join-card__content">
            <h3 className="join-card__title">{diggerTitle}</h3>
            <p className="join-card__text">{diggerText}</p>

            <SecondaryButton
              link="/"
              label="Rejoindre le club"
              centerVersion=""
            />
          </div>
        </div>

        <div className="join-card">
          <div className="join-card__top">
            <Image
              className="join-card__image"
              src={partnerImage}
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div className="join-card__content">
            <h3 className="join-card__title">{partnerTitle}</h3>
            <p className="join-card__text">{partnerText}</p>

            <SecondaryButton
              link="/"
              label="Rejoindre le club"
              centerVersion=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinTheClub;
