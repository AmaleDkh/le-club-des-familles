// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./ThreeKeyFigures.scss";

// // Hook
import { useHomepageData } from "@/hooks/useData";

function ThreeKeyFigures() {
  const homepageContent = useHomepageData();

  console.log("homepageContent", homepageContent);

  return (
    <>
      <section className="statistics-section">
        <div className="statistics-section__container">
          <SectionTitle
            title={homepageContent?.ThreeKeyFigures?.SectionTitle || ""}
            colorVersion="section-title--version-with-white-color"
            versionWithTextAlign="section-title--version-with-text-align"
          />

          <div className="statistics-section__grid">
            <div className="statistics-section__item">
              <div className="statistics-section__value">
                {homepageContent?.ThreeKeyFigures?.FirstKeyFigureNumber || ""}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.FirstKeyFigureParagraph ||
                  ""}
              </div>
            </div>

            <div className="statistics-section__item">
              <div className="statistics-section__value">
                {homepageContent?.ThreeKeyFigures?.SecondKeyFigureNumber || ""}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.SecondKeyFigureParagraph ||
                  ""}
              </div>
            </div>

            <div className="statistics-section__item">
              <div className="statistics-section__value">
                {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureNumber || ""}
              </div>
              <div className="statistics-section__label">
                {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureParagraph ||
                  ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThreeKeyFigures;
