//  Next elements
import Image, { StaticImageData } from "next/image";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./CtaSection.scss";

interface CtaSectionProps {
  image: StaticImageData;
}

function CtaSection({ image }: CtaSectionProps) {
  return (
    <div className="cta-section">
      <div className="cta-section__wrapper">
        <div className="cta-section__content">
          <SectionTitle
            title="Parce que la famille mérite le meilleur"
            paragraph="Chaque sortie est une occasion unique de créer des souvenirs. On vous aide à choisir les lieux qui rendent ces moments magiques."
            // title="Pour que chaque sortie en famille ne soit que plaisir"
            // paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            versionWithTextAlign="section-title--version-with-text-align"
          />

          <Button text="Découvrez tous les lieux" link="/places" />
        </div>
        <Image src={image} alt={"Image CTA"} className="cta-section__image" />
      </div>
    </div>
  );
}

export default CtaSection;
