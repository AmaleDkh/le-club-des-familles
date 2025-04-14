// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./FavoriteLocations.scss";

interface FavoriteLocationsSectionProps {
  title: string;
  buttonVersion: boolean;
}

function FavoriteLocations({
  title,
  buttonVersion,
}: FavoriteLocationsSectionProps) {
  return (
    <section className="favorite-locations">
      <h2 className="favorite-locations__title">{title}</h2>
      <ul className="favorite-locations__list">
        <li className="favorite-locations__list__item">
          <Image
            className="favorite-locations__list__item__image"
            src=""
            alt=""
            width={600}
            height={600}
          />
          <div className="favorite-locations__list__item__texts">
            <h3 className="favorite-locations__list__item__texts__title">
              NOM DU LIEU - LOCALISATION
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </li>

        <li className="favorite-locations__list__item">
          <Image
            className="favorite-locations__list__item__image"
            src=""
            alt=""
            width={600}
            height={600}
          />
          <div className="favorite-locations__list__item__texts">
            <h3 className="favorite-locations__list__item__texts__title">
              NOM DU LIEU - LOCALISATION
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </li>

        <li className="favorite-locations__list__item">
          <Image
            className="favorite-locations__list__item__image"
            src=""
            alt=""
            width={600}
            height={600}
          />
          <div className="favorite-locations__list__item__texts">
            <h3 className="favorite-locations__list__item__texts__title">
              NOM DU LIEU - LOCALISATION
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </li>

        <li className="favorite-locations__list__item">
          <Image
            className="favorite-locations__list__item__image"
            src=""
            alt=""
            width={600}
            height={600}
          />
          <div className="favorite-locations__list__item__texts">
            <h3 className="favorite-locations__list__item__texts__title">
              NOM DU LIEU - LOCALISATION
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </li>
      </ul>

      {buttonVersion === true && (
        <Button
          text="Découvrez tous les lieux family-friendly"
          link=""
          marginAutoVersion="button__with-margin-auto"
        />
      )}
    </section>
  );
}

export default FavoriteLocations;
