const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

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
  const baseUrl = apiStrapiUrl || "";

  const diggerImgUrl = baseUrl + diggerImage;
  const partnerImgUrl = baseUrl + partnerImage;

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
            {diggerImgUrl ? (
              <Image
                src={diggerImgUrl}
                alt={diggerTitle || "Digger image"}
                width={600}
                height={600}
                className="join-card__image"
              />
            ) : null}
          </div>
          <div className="join-card__content">
            <h3 className="join-card__title">{diggerTitle}</h3>
            <p className="join-card__text">{diggerText}</p>

            <SecondaryButton
              link="/finders"
              label="Rejoindre le club"
              centerVersion=""
            />
          </div>
        </div>

        <div className="join-card">
          <div className="join-card__top">
            {partnerImgUrl ? (
              <Image
                src={partnerImgUrl}
                alt={partnerTitle || "Partner image"}
                width={600}
                height={600}
                className="join-card__image"
              />
            ) : null}
          </div>
          <div className="join-card__content">
            <h3 className="join-card__title">{partnerTitle}</h3>
            <p className="join-card__text">{partnerText}</p>

            <SecondaryButton
              link="/restaurants"
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
