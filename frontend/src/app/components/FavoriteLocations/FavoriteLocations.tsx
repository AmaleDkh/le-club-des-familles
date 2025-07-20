"use client";

// React elements
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./FavoriteLocations.scss";

// Hook
import { fetchAirtableData } from "../../../utils/api";

interface FavoriteLocationsSectionProps {
  title: string;
  buttonVersion: boolean;
}

function FavoriteLocations({
  title,
  buttonVersion,
}: FavoriteLocationsSectionProps) {
  const [places, setPlaces] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAirtableData();

        setPlaces(data.slice(0, 4));
      } catch (error) {
        console.error("Erreur lors du chargement des lieux favoris:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="recommended container">
      <SectionTitle
        title={title}
        paragraph="Lorem ipsum"
        colorVersion=""
        versionWithTextAlign="section-title--version-with-text-align"
      />

      {isLoading ? (
        <div className="recommended__loading">
          <p>Chargement des lieux favoris</p>
        </div>
      ) : (
        <div className="recommended__grid">
          {places.map((place) => {
            const images = place.fields.Images || [];

            return (
              <div key={place.id} className="recommended__card group">
                <div className="recommended__image-wrapper">
                  {images.length > 0 ? (
                    <div className="recommended__image-container">
                      <img
                        src={
                          images[currentImageIndex[place.id] || 0]
                            ? images[currentImageIndex[place.id] || 0].url
                            : images[0].url
                        }
                        alt={place.fields.Name}
                        className="recommended__image group-hover:scale-105"
                      />
                      {images.length > 1 && (
                        <div className="recommended__image-indicators">
                          {images.map((_: any, index: number) => (
                            <button
                              key={index}
                              className={`recommended__image-indicator ${
                                (currentImageIndex[place.id] || 0) === index
                                  ? "recommended__image-indicator--active"
                                  : ""
                              }`}
                              onClick={() =>
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [place.id]: index,
                                }))
                              }
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="recommended__image-placeholder">
                      <span>Aucune image disponible</span>
                    </div>
                  )}
                </div>

                <div className="recommended__content">
                  <span className="recommended__name">{place.fields.Name}</span>
                  {/* <h3 className="recommended__name">{place.fields.Name}</h3> */}
                  <div className="recommended__location">
                    <MapPin className="recommended__location-icon" />
                    <span>{place.fields.Address}</span>
                  </div>
                  <span className="recommended__tag">
                    {place.fields["Coup de coeur"]
                      ? "Coup de coeur"
                      : "Recommandé"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {buttonVersion === true && (
        <Button
          text="Découvrez tous les lieux"
          link="/places"
          marginAutoVersion="button--center-version"
          marginTopVersion="button--margin-top-version"
        />
      )}
    </section>
  );
}

export default FavoriteLocations;
