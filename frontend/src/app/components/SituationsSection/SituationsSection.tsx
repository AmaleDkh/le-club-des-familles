// Next element
import Image from "next/image";
import { StaticImageData } from "next/image";

// Style
import "./SituationsSection.scss";

interface SituationsSectionProps {
  image: StaticImageData;
}

function SituationsSection({ image }: SituationsSectionProps) {
  return (
    <section className="situations-section">
      <div className="situations-section__content">
        <div className="situations-section__texts">
          <h2 className="situations-section__title">
            Tu as déjà vécu une de ces situations ?
          </h2>
          <p className="situations-section__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="situations-section__situation">
            <h3 className="situations-section__situation__title">Galère #1</h3>
            <p className="situations-section__situation__text">
              Trouver un restaurant family-friendly un jour de pluie...
            </p>
          </div>

          <div className="situations-section__situation">
            <h3 className="situations-section__situation__title">Galère #2</h3>
            <p className="situations-section__situation__text">
              Courir après ton enfant dans un restaurant... et finir par lui
              donner toute la corbeille de pain !
            </p>
          </div>

          <div className="situations-section__situation">
            <h3 className="situations-section__situation__title">Galère #3</h3>
            <p className="situations-section__situation__text">
              Trouver un restaurant family-friendly un jour de pluie...
            </p>
          </div>
        </div>

        <div className="situations-section__image-wrapper">
          <Image
            src={image}
            alt="Restaurant family-friendly"
            width={612}
            height={667}
            className="situations-section__image"
          />
        </div>
      </div>
    </section>
  );
}

export default SituationsSection;
