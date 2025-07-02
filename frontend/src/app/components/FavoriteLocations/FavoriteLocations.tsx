// React & Next elements
import Image from "next/image";
import { MapPin } from "lucide-react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./FavoriteLocations.scss";

const recommended = [
  {
    nom: "LIEU 1",
    adresse: "ADRESSE 1",
    image: "",
    type: "Parc",
  },
  {
    nom: "LIEU 2",
    adresse: "ADRESSE 2",
    image: "",
    type: "Loisir",
  },
  {
    nom: "LIEU 3",
    adresse: "ADRESSE 3",
    image: "",
    type: "Café",
  },
  {
    nom: "LIEU 4",
    adresse: "ADRESSE 4",
    image: "",
    type: "Ferme",
  },
];

interface FavoriteLocationsSectionProps {
  title: string;
  buttonVersion: boolean;
}

function FavoriteLocations({
  title,
  buttonVersion,
}: FavoriteLocationsSectionProps) {
  return (
    <section className="recommended container">
      <SectionTitle
        title={title}
        colorVersion=""
        versionWithTextAlign="section-title--version-with-text-align"
      />
      <div className="recommended__grid">
        {recommended.map((place) => (
          <div key={place.nom} className="recommended__card group">
            <Image
              className="recommended__image group-hover:scale-105"
              src={place.image}
              alt="Alt"
              width={200}
              height={200}
            />
            <div className="recommended__content">
              <h3 className="recommended__name">{place.nom}</h3>
              <div className="recommended__location">
                <MapPin className="recommended__location-icon" />
                <span>{place.adresse}</span>
              </div>
              <span className="recommended__tag">{place.type}</span>
            </div>
          </div>
        ))}
      </div>

      {buttonVersion === true && (
        <Button
          text="DÉCOUVREZ TOUS LES LIEUX"
          link="/places"
          marginAutoVersion="button--center-version"
          marginTopVersion="button--margin-top-version"
        />
      )}
    </section>
  );
}

export default FavoriteLocations;
