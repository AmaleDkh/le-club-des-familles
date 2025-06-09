// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./ThreeKeyFigures.scss";

// // Hook
import { useHomepageData } from "@/hooks/useData";

interface ThreeKeyFiguresSectionProps {
  title: string;
  subtitle?: string;
}

const ThreeKeyFigures = ({ title, subtitle }: ThreeKeyFiguresSectionProps) => {
  const homepageContent = useHomepageData();

  console.log("homepageContent", homepageContent);

  return (
    <>
      {/* {homepageContent?.[0] && ( */}
      <section className="statistics-section">
        <div className="statistics-section__container">
          <SectionTitle
            // title="LE CLUB DES FAMILLES EN CHIFFRES"
            title={homepageContent?.ThreeKeyFigures?.SectionTitle || ""}
            colorVersion="section-title--version-with-white-color"
            versionWithTextAlign="section-title--version-with-text-align"
          />

          <div className="statistics-section__grid">
            <div className="statistics-section__item">
              {/* <div className="statistics-section__icon">
                  {homepageContent[0].locations_referenced_number}
                </div> */}

              <div className="statistics-section__value">
                {/* {homepageContent[0].locations_referenced_number} */}
                {homepageContent?.ThreeKeyFigures?.FirstKeyFigureNumber || ""}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.FirstKeyFigureParagraph ||
                  ""}
                {/* {homepageContent[0].locations_referenced_words} */}
              </div>
            </div>

            <div className="statistics-section__item">
              <div className="statistics-section__value">
                {homepageContent?.ThreeKeyFigures?.SecondKeyFigureNumber || ""}
                {/* {homepageContent[0].scouts_number} */}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.SecondKeyFigureParagraph ||
                  ""}
                {/* {homepageContent[0].scouts_words} */}
              </div>
            </div>

            <div className="statistics-section__item">
              <div className="statistics-section__value">
                {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureNumber || ""}
                {/* {homepageContent[0].instagram_followers_number} */}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureParagraph ||
                  ""}
                {/* {homepageContent[0].instagram_followers_words} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

export default ThreeKeyFigures;
