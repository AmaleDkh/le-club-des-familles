// Next & React elements
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  ChevronUp,
  X,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Style
import "./AllThePlaces.scss";

// Hooks
import {
  fetchAirtableData,
  fetchAirtableBabyBadgesData,
  fetchAirtableChildrenBadgesData,
  fetchAirtableAdultBadgesData,
  fetchAirtableValueBadgesData,
} from "../../../utils/api";

function AllThePlaces() {
  // États pour la recherche et les filtres
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // États pour les données
  const [allPlaces, setAllPlaces] = useState<any[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([]);
  const [babyBadges, setBabyBadges] = useState<any[]>([]);
  const [childrenBadges, setChildrenBadges] = useState<any[]>([]);
  const [adultBadges, setAdultBadges] = useState<any[]>([]);
  const [valueBadges, setValueBadges] = useState<any[]>([]);

  // Chargement initial des données
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        const [
          placesData,
          babyBadgesData,
          childrenBadgesData,
          adultBadgesData,
          valueBadgesData,
        ] = await Promise.all([
          fetchAirtableData(),
          fetchAirtableBabyBadgesData(),
          fetchAirtableChildrenBadgesData(),
          fetchAirtableAdultBadgesData(),
          fetchAirtableValueBadgesData(),
        ]);

        setAllPlaces(placesData);
        setFilteredPlaces(placesData);
        setBabyBadges(babyBadgesData);
        setChildrenBadges(childrenBadgesData);
        setAdultBadges(adultBadgesData);
        setValueBadges(valueBadgesData);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Filtrage des lieux
  useEffect(() => {
    const applyFilters = () => {
      let results = [...allPlaces];

      // Filtre de recherche
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        results = results.filter(
          (place) =>
            place.fields.Name?.toLowerCase().includes(query) ||
            place.fields.Address?.toLowerCase().includes(query) ||
            place.fields.Description?.toLowerCase().includes(query)
        );
      }

      // Filtres de badges
      if (activeFilters.length > 0) {
        results = results.filter((place) => {
          return activeFilters.some((filterName) => {
            const matchingBabyBadge = babyBadges.find(
              (b) => b.fields.Name === filterName
            );
            const matchingChildBadge = childrenBadges.find(
              (b) => b.fields.Name === filterName
            );
            const matchingAdultBadge = adultBadges.find(
              (b) => b.fields.Name === filterName
            );
            const matchingValueBadge = valueBadges.find(
              (b) => b.fields.Name === filterName
            );

            return (
              (matchingBabyBadge &&
                place.fields["Badges bébés"]?.includes(matchingBabyBadge.id)) ||
              (matchingChildBadge &&
                place.fields["Badges enfants"]?.includes(
                  matchingChildBadge.id
                )) ||
              (matchingAdultBadge &&
                place.fields["Badges adultes"]?.includes(
                  matchingAdultBadge.id
                )) ||
              (matchingValueBadge &&
                place.fields["Badges valeurs"]?.includes(matchingValueBadge.id))
            );
          });
        });
      }

      setFilteredPlaces(results);
    };

    applyFilters();
  }, [
    searchQuery,
    activeFilters,
    allPlaces,
    babyBadges,
    childrenBadges,
    adultBadges,
    valueBadges,
  ]);

  const toggleDropdown = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const toggleBadgeFilter = (badgeName: string) => {
    setActiveFilters((prev) =>
      prev.includes(badgeName)
        ? prev.filter((filter) => filter !== badgeName)
        : [...prev, badgeName]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const badgeTypes = [
    {
      key: "baby",
      name: "Badges bébés",
      badges: babyBadges,
      color: "all-the-places__badge--baby",
    },
    {
      key: "children",
      name: "Badges enfants",
      badges: childrenBadges,
      color: "all-the-places__badge--children",
    },
    {
      key: "adult",
      name: "Badges adultes",
      badges: adultBadges,
      color: "all-the-places__badge--adult",
    },
    {
      key: "value",
      name: "Badges valeurs",
      badges: valueBadges,
      color: "all-the-places__badge--value",
    },
  ];

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="all-the-places__carousel-arrow all-the-places__carousel-arrow--prev"
        onClick={onClick}
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="all-the-places__carousel-arrow all-the-places__carousel-arrow--next"
        onClick={onClick}
        aria-label="Image suivante"
      >
        <ChevronRight size={24} />
      </button>
    );
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: false,
    autoplay: false,
  };

  return (
    <div className="all-the-places">
      <main className="all-the-places__main">
        <div className="all-the-places__search">
          <div className="all-the-places__search-container">
            <Search className="all-the-places__search-icon" />
            <input
              type="text"
              className="all-the-places__search-input"
              placeholder="Rechercher un lieu ou une adresse"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="all-the-places__filters">
          {activeFilters.length > 0 && (
            <div className="all-the-places__active-filters">
              {activeFilters.map((filter: any) => (
                <div key={filter} className="all-the-places__active-filter">
                  <span className="all-the-places__active-filter-text">
                    {filter}
                  </span>
                  <button
                    onClick={() => toggleBadgeFilter(filter)}
                    className="all-the-places__active-filter-remove"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <button
                onClick={clearAllFilters}
                className="all-the-places__clear-filters"
              >
                Effacer tout
              </button>
            </div>
          )}

          <div className="all-the-places__filter-buttons">
            {badgeTypes.map((type: any) => (
              <div
                key={type.key}
                className="all-the-places__filter-button-wrapper"
              >
                <button
                  className={`all-the-places__filter-button ${
                    openDropdown === type.key
                      ? "all-the-places__filter-button--active"
                      : ""
                  } ${
                    activeFilters.some((filter) =>
                      type.badges.some(
                        (badge: any) => badge.fields.Name === filter
                      )
                    )
                      ? "all-the-places__filter-button--selected"
                      : ""
                  }`}
                  onClick={() => toggleDropdown(type.key)}
                >
                  <span>{type.name}</span>
                  {openDropdown === type.key ? (
                    <ChevronUp
                      size={16}
                      className="all-the-places__filter-icon"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="all-the-places__filter-icon"
                    />
                  )}
                </button>

                {openDropdown === type.key && (
                  <div className="all-the-places__dropdown">
                    <div className="all-the-places__dropdown-content">
                      {type.badges.length > 0 ? (
                        type.badges.map((badge: any) => (
                          <div
                            key={badge.id}
                            className="all-the-places__dropdown-item"
                          >
                            <label className="all-the-places__dropdown-label">
                              <input
                                type="checkbox"
                                className="all-the-places__dropdown-checkbox"
                                checked={activeFilters.includes(
                                  badge.fields.Name
                                )}
                                onChange={() =>
                                  toggleBadgeFilter(badge.fields.Name)
                                }
                              />
                              <span className="all-the-places__dropdown-text">
                                {badge.fields.Name}
                              </span>
                            </label>
                          </div>
                        ))
                      ) : (
                        <p className="all-the-places__dropdown-empty">
                          Aucun badge disponible
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="all-the-places__results-count">
          <p className="all-the-places__results-text">
            {!isLoading &&
              (filteredPlaces.length > 0
                ? `${filteredPlaces.length} lieu${
                    filteredPlaces.length > 1 ? "x" : ""
                  } trouvé${filteredPlaces.length > 1 ? "s" : ""}`
                : "Aucun lieu trouvé")}
          </p>
        </div>

        {isLoading ? (
          <div className="all-the-places__loading">
            <div className="all-the-places__loading-content">
              <p>Chargement des lieux...</p>
            </div>
          </div>
        ) : filteredPlaces.length > 0 ? (
          <div className="all-the-places__grid">
            {filteredPlaces.map((place: any) => {
              const images = place.fields.Images || [];

              return (
                <div key={place.id} className="all-the-places__card">
                  <div className="all-the-places__card-image-wrapper">
                    {images.length > 0 ? (
                      <Slider
                        {...carouselSettings}
                        className="all-the-places__carousel"
                      >
                        {images.map((image: any, index: number) => (
                          <div
                            key={index}
                            className="all-the-places__carousel-slide"
                          >
                            <Image
                              src={image.url}
                              alt={`${place.fields.Name} - Image ${index + 1}`}
                              className="all-the-places__card-image"
                            />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="all-the-places__card-image-placeholder">
                        <Image
                          src="https://via.placeholder.com/400x300?text=Aucune+image"
                          alt="Aucune image disponible"
                          className="all-the-places__card-image"
                        />
                      </div>
                    )}
                  </div>

                  <div className="all-the-places__card-content">
                    <h3 className="all-the-places__card-title">
                      {place.fields.Name}
                    </h3>

                    <div className="all-the-places__card-address">
                      <MapPin className="all-the-places__card-address-icon" />
                      <span className="all-the-places__card-address-text">
                        {place.fields.Address}
                      </span>
                    </div>

                    <div className="all-the-places__card-badges">
                      <div className="all-the-places__card-badges-list">
                        {badgeTypes.map((type: any) => {
                          const badgeIds = place.fields[type.name] || [];
                          return type.badges
                            .filter((badge: any) => badgeIds.includes(badge.id))
                            .map((badge: any) => (
                              <span
                                key={badge.id}
                                className={`all-the-places__badge ${type.color}`}
                              >
                                {badge.fields.Name}
                              </span>
                            ));
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="all-the-places__empty">
            <p className="all-the-places__empty-title">
              Aucun lieu ne correspond à votre recherche
            </p>
            <p className="all-the-places__empty-subtitle">
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default AllThePlaces;
