// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Style
import "./SituationsSection.scss";

import SectionTitle from "../SectionTitle/SectionTitle";

interface SituationsSectionProps {
  image: StaticImageData;
}

function SituationsSection({ image }: SituationsSectionProps) {
  return (
    <section className="situations-section">
      <div className="situations-section__content">
        <div className="situations-section__texts">
          {/* <h2 className="situations-section__title">
            Tu t’es déjà retrouvé.e dans l’une de ces galères ?
          </h2>
          <p className="situations-section__paragraph">
            On sait à quoi ça ressemble, on est passés par là aussi.
          </p> */}

          <SectionTitle
            title="Tu t’es déjà retrouvé.e dans l’une de ces galères ?"
            paragraph="On sait à quoi ça ressemble. On est passés par là aussi."
          />

          <div className="situations-section__list">
            <div className="situations-section__situation">
              <h3 className="situations-section__situation__title">
                Galère #1
              </h3>
              <p className="situations-section__situation__text">
                Il est midi, il pleut, et tu ne trouves aucun resto sympa où ton
                enfant est le bienvenu...
              </p>
            </div>

            <div className="situations-section__situation">
              <h3 className="situations-section__situation__title">
                Galère #2
              </h3>
              <p className="situations-section__situation__text">
                Tu pousses la porte avec la poussette, et tout le monde te
                regarde comme si t’étais pas au bon endroit...
              </p>
            </div>

            <div className="situations-section__situation">
              <h3 className="situations-section__situation__title">
                Galère #3
              </h3>
              <p className="situations-section__situation__text">
                Ton enfant fait le tour des tables pendant que tu lui balances
                des morceaux de pain pour gagner 5 minutes de calme…
              </p>
            </div>
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
