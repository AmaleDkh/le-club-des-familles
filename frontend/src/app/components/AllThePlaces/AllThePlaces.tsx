"use client";

// React elements
import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  X,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  const [allPlaces, setAllPlaces] = useState<any[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([]);
  const [babyBadges, setBabyBadges] = useState<any[]>([]);
  const [childrenBadges, setChildrenBadges] = useState<any[]>([]);
  const [adultBadges, setAdultBadges] = useState<any[]>([]);
  const [valueBadges, setValueBadges] = useState<any[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  useEffect(() => {
    const applyFilters = () => {
      let results = [...allPlaces];

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        results = results.filter(
          (place) =>
            place.fields.Name?.toLowerCase().includes(query) ||
            place.fields.Address?.toLowerCase().includes(query) ||
            place.fields.Description?.toLowerCase().includes(query)
        );
      }

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

      setCurrentMobileIndex(0);
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
    setCurrentMobileIndex(0);
  };

  const nextMobileCard = () => {
    if (currentMobileIndex < filteredPlaces.length - 1) {
      setCurrentMobileIndex(currentMobileIndex + 1);
    }
  };

  const prevMobileCard = () => {
    if (currentMobileIndex > 0) {
      setCurrentMobileIndex(currentMobileIndex - 1);
    }
  };

  const goToMobileCard = (index: number) => {
    setCurrentMobileIndex(index);
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
          <>
            {/* Version Desktop - Grille */}
            <div className="all-the-places__grid all-the-places__grid--desktop">
              {filteredPlaces.map((place: any) => {
                const images = place.fields.Images || [];

                return (
                  <div key={place.id} className="all-the-places__card">
                    <div className="all-the-places__card-image-wrapper">
                      {images.length > 0 ? (
                        <div className="all-the-places__image-container">
                          <img
                            src={
                              images[currentImageIndex[place.id] || 0]
                                ? images[currentImageIndex[place.id] || 0].url
                                : images[0].url
                            }
                            alt={place.fields.Name}
                            className="all-the-places__card-image"
                          />
                          {images.length > 1 && (
                            <div className="all-the-places__image-indicators">
                              {images.map((_: any, index: number) => (
                                <button
                                  key={index}
                                  className={`all-the-places__image-indicator ${
                                    (currentImageIndex[place.id] || 0) === index
                                      ? "all-the-places__image-indicator--active"
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
                        <div className="all-the-places__card-image-placeholder">
                          <span>Aucune image disponible</span>
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
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="all-the-places__mobile-carousel">
              <div className="all-the-places__mobile-carousel-container">
                <button
                  className="all-the-places__mobile-nav all-the-places__mobile-nav--prev"
                  onClick={prevMobileCard}
                  disabled={currentMobileIndex === 0}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="all-the-places__mobile-carousel-wrapper">
                  <div
                    className="all-the-places__mobile-carousel-track"
                    style={{
                      transform: `translateX(-${currentMobileIndex * 100}%)`,
                    }}
                  >
                    {filteredPlaces.map((place: any, index: number) => {
                      const images = place.fields.Images || [];

                      return (
                        <div
                          key={place.id}
                          className="all-the-places__mobile-card"
                        >
                          <div className="all-the-places__card-image-wrapper">
                            {images.length > 0 ? (
                              <div className="all-the-places__image-container">
                                <img
                                  src={
                                    images[currentImageIndex[place.id] || 0]
                                      ? images[currentImageIndex[place.id] || 0]
                                          .url
                                      : images[0].url
                                  }
                                  alt={place.fields.Name}
                                  className="all-the-places__card-image"
                                />
                                {images.length > 1 && (
                                  <div className="all-the-places__image-indicators">
                                    {images.map((_: any, index: number) => (
                                      <button
                                        key={index}
                                        className={`all-the-places__image-indicator ${
                                          (currentImageIndex[place.id] || 0) ===
                                          index
                                            ? "all-the-places__image-indicator--active"
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
                              <div className="all-the-places__card-image-placeholder">
                                <span>Aucune image disponible</span>
                              </div>
                            )}
                          </div>

                          <div className="all-the-places__card-content">
                            <span className="all-the-places__card-title">
                              {place.fields.Name}
                            </span>

                            {/* <h3 className="all-the-places__card-title">
                              {place.fields.Name}
                            </h3> */}

                            <div className="all-the-places__card-address">
                              <MapPin className="all-the-places__card-address-icon" />
                              <span className="all-the-places__card-address-text">
                                {place.fields.Address}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  className="all-the-places__mobile-nav all-the-places__mobile-nav--next"
                  onClick={nextMobileCard}
                  disabled={currentMobileIndex === filteredPlaces.length - 1}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              {/* 
              <div className="all-the-places__mobile-indicators">
                {filteredPlaces.map((_, index) => (
                  <button
                    key={index}
                    className={`all-the-places__mobile-indicator ${
                      index === currentMobileIndex
                        ? "all-the-places__mobile-indicator--active"
                        : ""
                    }`}
                    onClick={() => goToMobileCard(index)}
                  />
                ))}
              </div> */}

              <div className="all-the-places__mobile-counter">
                <span>
                  {currentMobileIndex + 1} / {filteredPlaces.length}
                </span>
              </div>
            </div>
          </>
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

// "use client";

// // React elements
// import { useState, useEffect } from "react";
// import {
//   Search,
//   ChevronDown,
//   ChevronUp,
//   X,
//   MapPin,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Style
// import "./AllThePlaces.scss";

// // Hooks
// import {
//   fetchAirtableData,
//   fetchAirtableBabyBadgesData,
//   fetchAirtableChildrenBadgesData,
//   fetchAirtableAdultBadgesData,
//   fetchAirtableValueBadgesData,
// } from "../../../utils/api";

// function AllThePlaces() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState<{
//     [key: string]: number;
//   }>({});

//   const [allPlaces, setAllPlaces] = useState<any[]>([]);
//   const [filteredPlaces, setFilteredPlaces] = useState<any[]>([]);
//   const [babyBadges, setBabyBadges] = useState<any[]>([]);
//   const [childrenBadges, setChildrenBadges] = useState<any[]>([]);
//   const [adultBadges, setAdultBadges] = useState<any[]>([]);
//   const [valueBadges, setValueBadges] = useState<any[]>([]);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         setIsLoading(true);
//         const [
//           placesData,
//           babyBadgesData,
//           childrenBadgesData,
//           adultBadgesData,
//           valueBadgesData,
//         ] = await Promise.all([
//           fetchAirtableData(),
//           fetchAirtableBabyBadgesData(),
//           fetchAirtableChildrenBadgesData(),
//           fetchAirtableAdultBadgesData(),
//           fetchAirtableValueBadgesData(),
//         ]);

//         setAllPlaces(placesData);
//         setFilteredPlaces(placesData);
//         setBabyBadges(babyBadgesData);
//         setChildrenBadges(childrenBadgesData);
//         setAdultBadges(adultBadgesData);
//         setValueBadges(valueBadgesData);
//       } catch (error) {
//         console.error("Erreur lors du chargement des données:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAllData();
//   }, []);

//   useEffect(() => {
//     const applyFilters = () => {
//       let results = [...allPlaces];

//       if (searchQuery.trim()) {
//         const query = searchQuery.toLowerCase().trim();
//         results = results.filter(
//           (place) =>
//             place.fields.Name?.toLowerCase().includes(query) ||
//             place.fields.Address?.toLowerCase().includes(query) ||
//             place.fields.Description?.toLowerCase().includes(query)
//         );
//       }

//       if (activeFilters.length > 0) {
//         results = results.filter((place) => {
//           return activeFilters.some((filterName) => {
//             const matchingBabyBadge = babyBadges.find(
//               (b) => b.fields.Name === filterName
//             );
//             const matchingChildBadge = childrenBadges.find(
//               (b) => b.fields.Name === filterName
//             );
//             const matchingAdultBadge = adultBadges.find(
//               (b) => b.fields.Name === filterName
//             );
//             const matchingValueBadge = valueBadges.find(
//               (b) => b.fields.Name === filterName
//             );

//             return (
//               (matchingBabyBadge &&
//                 place.fields["Badges bébés"]?.includes(matchingBabyBadge.id)) ||
//               (matchingChildBadge &&
//                 place.fields["Badges enfants"]?.includes(
//                   matchingChildBadge.id
//                 )) ||
//               (matchingAdultBadge &&
//                 place.fields["Badges adultes"]?.includes(
//                   matchingAdultBadge.id
//                 )) ||
//               (matchingValueBadge &&
//                 place.fields["Badges valeurs"]?.includes(matchingValueBadge.id))
//             );
//           });
//         });
//       }

//       setFilteredPlaces(results);

//       setCurrentMobileIndex(0);
//     };

//     applyFilters();
//   }, [
//     searchQuery,
//     activeFilters,
//     allPlaces,
//     babyBadges,
//     childrenBadges,
//     adultBadges,
//     valueBadges,
//   ]);

//   const toggleDropdown = (type: string) => {
//     setOpenDropdown(openDropdown === type ? null : type);
//   };

//   const toggleBadgeFilter = (badgeName: string) => {
//     setActiveFilters((prev) =>
//       prev.includes(badgeName)
//         ? prev.filter((filter) => filter !== badgeName)
//         : [...prev, badgeName]
//     );
//   };

//   const clearAllFilters = () => {
//     setActiveFilters([]);
//     setCurrentMobileIndex(0);
//   };

//   const nextMobileCard = () => {
//     if (currentMobileIndex < filteredPlaces.length - 1) {
//       setCurrentMobileIndex(currentMobileIndex + 1);
//     }
//   };

//   const prevMobileCard = () => {
//     if (currentMobileIndex > 0) {
//       setCurrentMobileIndex(currentMobileIndex - 1);
//     }
//   };

//   const goToMobileCard = (index: number) => {
//     setCurrentMobileIndex(index);
//   };

//   const badgeTypes = [
//     {
//       key: "baby",
//       name: "Badges bébés",
//       badges: babyBadges,
//       color: "all-the-places__badge--baby",
//     },
//     {
//       key: "children",
//       name: "Badges enfants",
//       badges: childrenBadges,
//       color: "all-the-places__badge--children",
//     },
//     {
//       key: "adult",
//       name: "Badges adultes",
//       badges: adultBadges,
//       color: "all-the-places__badge--adult",
//     },
//     {
//       key: "value",
//       name: "Badges valeurs",
//       badges: valueBadges,
//       color: "all-the-places__badge--value",
//     },
//   ];

//   return (
//     <div className="all-the-places">
//       <main className="all-the-places__main">
//         <div className="all-the-places__search">
//           <div className="all-the-places__search-container">
//             <Search className="all-the-places__search-icon" />
//             <input
//               type="text"
//               className="all-the-places__search-input"
//               placeholder="Rechercher un lieu ou une adresse"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="all-the-places__filters">
//           {activeFilters.length > 0 && (
//             <div className="all-the-places__active-filters">
//               {activeFilters.map((filter: any) => (
//                 <div key={filter} className="all-the-places__active-filter">
//                   <span className="all-the-places__active-filter-text">
//                     {filter}
//                   </span>
//                   <button
//                     onClick={() => toggleBadgeFilter(filter)}
//                     className="all-the-places__active-filter-remove"
//                   >
//                     <X size={14} />
//                   </button>
//                 </div>
//               ))}
//               <button
//                 onClick={clearAllFilters}
//                 className="all-the-places__clear-filters"
//               >
//                 Effacer tout
//               </button>
//             </div>
//           )}

//           <div className="all-the-places__filter-buttons">
//             {badgeTypes.map((type: any) => (
//               <div
//                 key={type.key}
//                 className="all-the-places__filter-button-wrapper"
//               >
//                 <button
//                   className={`all-the-places__filter-button ${
//                     openDropdown === type.key
//                       ? "all-the-places__filter-button--active"
//                       : ""
//                   } ${
//                     activeFilters.some((filter) =>
//                       type.badges.some(
//                         (badge: any) => badge.fields.Name === filter
//                       )
//                     )
//                       ? "all-the-places__filter-button--selected"
//                       : ""
//                   }`}
//                   onClick={() => toggleDropdown(type.key)}
//                 >
//                   <span>{type.name}</span>
//                   {openDropdown === type.key ? (
//                     <ChevronUp
//                       size={16}
//                       className="all-the-places__filter-icon"
//                     />
//                   ) : (
//                     <ChevronDown
//                       size={16}
//                       className="all-the-places__filter-icon"
//                     />
//                   )}
//                 </button>

//                 {openDropdown === type.key && (
//                   <div className="all-the-places__dropdown">
//                     <div className="all-the-places__dropdown-content">
//                       {type.badges.length > 0 ? (
//                         type.badges.map((badge: any) => (
//                           <div
//                             key={badge.id}
//                             className="all-the-places__dropdown-item"
//                           >
//                             <label className="all-the-places__dropdown-label">
//                               <input
//                                 type="checkbox"
//                                 className="all-the-places__dropdown-checkbox"
//                                 checked={activeFilters.includes(
//                                   badge.fields.Name
//                                 )}
//                                 onChange={() =>
//                                   toggleBadgeFilter(badge.fields.Name)
//                                 }
//                               />
//                               <span className="all-the-places__dropdown-text">
//                                 {badge.fields.Name}
//                               </span>
//                             </label>
//                           </div>
//                         ))
//                       ) : (
//                         <p className="all-the-places__dropdown-empty">
//                           Aucun badge disponible
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="all-the-places__results-count">
//           <p className="all-the-places__results-text">
//             {!isLoading &&
//               (filteredPlaces.length > 0
//                 ? `${filteredPlaces.length} lieu${
//                     filteredPlaces.length > 1 ? "x" : ""
//                   } trouvé${filteredPlaces.length > 1 ? "s" : ""}`
//                 : "Aucun lieu trouvé")}
//           </p>
//         </div>

//         {isLoading ? (
//           <div className="all-the-places__loading">
//             <div className="all-the-places__loading-content">
//               <p>Chargement des lieux...</p>
//             </div>
//           </div>
//         ) : filteredPlaces.length > 0 ? (
//           <>
//             {/* Version Desktop - Grille */}
//             <div className="all-the-places__grid all-the-places__grid--desktop">
//               {filteredPlaces.map((place: any) => {
//                 const images = place.fields.Images || [];

//                 return (
//                   <div key={place.id} className="all-the-places__card">
//                     <div className="all-the-places__card-image-wrapper">
//                       {images.length > 0 ? (
//                         <div className="all-the-places__image-container">
//                           <img
//                             src={
//                               images[currentImageIndex[place.id] || 0]
//                                 ? images[currentImageIndex[place.id] || 0].url
//                                 : images[0].url
//                             }
//                             alt={place.fields.Name}
//                             className="all-the-places__card-image"
//                           />
//                           {images.length > 1 && (
//                             <div className="all-the-places__image-indicators">
//                               {images.map((_: any, index: number) => (
//                                 <button
//                                   key={index}
//                                   className={`all-the-places__image-indicator ${
//                                     (currentImageIndex[place.id] || 0) === index
//                                       ? "all-the-places__image-indicator--active"
//                                       : ""
//                                   }`}
//                                   onClick={() =>
//                                     setCurrentImageIndex((prev) => ({
//                                       ...prev,
//                                       [place.id]: index,
//                                     }))
//                                   }
//                                 />
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <div className="all-the-places__card-image-placeholder">
//                           <span>Aucune image disponible</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="all-the-places__card-content">
//                       <h3 className="all-the-places__card-title">
//                         {place.fields.Name}
//                       </h3>

//                       <div className="all-the-places__card-address">
//                         <MapPin className="all-the-places__card-address-icon" />
//                         <span className="all-the-places__card-address-text">
//                           {place.fields.Address}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="all-the-places__mobile-carousel">
//               <div className="all-the-places__mobile-carousel-container">
//                 <button
//                   className="all-the-places__mobile-nav all-the-places__mobile-nav--prev"
//                   onClick={prevMobileCard}
//                   disabled={currentMobileIndex === 0}
//                 >
//                   <ChevronLeft size={24} />
//                 </button>

//                 <div className="all-the-places__mobile-carousel-wrapper">
//                   <div
//                     className="all-the-places__mobile-carousel-track"
//                     style={{
//                       transform: `translateX(-${currentMobileIndex * 100}%)`,
//                     }}
//                   >
//                     {filteredPlaces.map((place: any, index: number) => {
//                       const images = place.fields.Images || [];

//                       return (
//                         <div
//                           key={place.id}
//                           className="all-the-places__mobile-card"
//                         >
//                           <div className="all-the-places__card-image-wrapper">
//                             {images.length > 0 ? (
//                               <div className="all-the-places__image-container">
//                                 <img
//                                   src={
//                                     images[currentImageIndex[place.id] || 0]
//                                       ? images[currentImageIndex[place.id] || 0]
//                                           .url
//                                       : images[0].url
//                                   }
//                                   alt={place.fields.Name}
//                                   className="all-the-places__card-image"
//                                 />
//                                 {images.length > 1 && (
//                                   <div className="all-the-places__image-indicators">
//                                     {images.map((_: any, index: number) => (
//                                       <button
//                                         key={index}
//                                         className={`all-the-places__image-indicator ${
//                                           (currentImageIndex[place.id] || 0) ===
//                                           index
//                                             ? "all-the-places__image-indicator--active"
//                                             : ""
//                                         }`}
//                                         onClick={() =>
//                                           setCurrentImageIndex((prev) => ({
//                                             ...prev,
//                                             [place.id]: index,
//                                           }))
//                                         }
//                                       />
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             ) : (
//                               <div className="all-the-places__card-image-placeholder">
//                                 <span>Aucune image disponible</span>
//                               </div>
//                             )}
//                           </div>

//                           <div className="all-the-places__card-content">
//                             <h3 className="all-the-places__card-title">
//                               {place.fields.Name}
//                             </h3>

//                             <div className="all-the-places__card-address">
//                               <MapPin className="all-the-places__card-address-icon" />
//                               <span className="all-the-places__card-address-text">
//                                 {place.fields.Address}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <button
//                   className="all-the-places__mobile-nav all-the-places__mobile-nav--next"
//                   onClick={nextMobileCard}
//                   disabled={currentMobileIndex === filteredPlaces.length - 1}
//                 >
//                   <ChevronRight size={24} />
//                 </button>
//               </div>
//               {/*
//               <div className="all-the-places__mobile-indicators">
//                 {filteredPlaces.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`all-the-places__mobile-indicator ${
//                       index === currentMobileIndex
//                         ? "all-the-places__mobile-indicator--active"
//                         : ""
//                     }`}
//                     onClick={() => goToMobileCard(index)}
//                   />
//                 ))}
//               </div> */}

//               <div className="all-the-places__mobile-counter">
//                 <span>
//                   {currentMobileIndex + 1} / {filteredPlaces.length}
//                 </span>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="all-the-places__empty">
//             <p className="all-the-places__empty-title">
//               Aucun lieu ne correspond à votre recherche
//             </p>
//             <p className="all-the-places__empty-subtitle">
//               Essayez de modifier vos filtres ou votre recherche
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default AllThePlaces;
