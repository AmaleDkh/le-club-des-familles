// Next element
import Image from "next/image";

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
  return (
    <section className="badges-section">
      <h2 className="badges-section__title">{title}</h2>

      <ul className="badges-section__list">
        <li className="badges-section__list__item">
          <Image
            className="badges-section__list__item__image"
            src={firstBadgeImage}
            alt=""
            width={200}
            height={200}
          />
          <h3 className="badges-section__list__item__title">
            {firstBadgeTitle}
          </h3>
          <p>{firstBadgeParagraph}</p>
        </li>

        <li className="badges-section__list__item">
          <Image
            className="badges-section__list__item__image"
            src={secondBadgeImage}
            alt=""
            width={200}
            height={200}
          />
          <h3 className="badges-section__list__item__title">
            {secondBadgeTitle}
          </h3>
          <p>{secondBadgeParagraph}</p>
        </li>

        <li className="badges-section__list__item">
          <Image
            className="badges-section__list__item__image"
            src={thirdBadgeImage}
            alt=""
            width={200}
            height={200}
          />
          <h3 className="badges-section__list__item__title">
            {thirdBadgeTitle}
          </h3>
          <p>{thirdBadgeParagraph}</p>
        </li>

        <li className="badges-section__list__item">
          <Image
            className="badges-section__list__item__image"
            src={fourthBadgeImage}
            alt=""
            width={200}
            height={200}
          />
          <h3 className="badges-section__list__item__title">
            {fourthBadgeTitle}
          </h3>
          <p>{fourthBadgeParagraph}</p>
        </li>
      </ul>
    </section>
  );
}

export default BadgesSection;
