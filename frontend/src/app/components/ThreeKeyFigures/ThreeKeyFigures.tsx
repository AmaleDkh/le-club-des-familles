// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./ThreeKeyFigures.scss";

// Hook
// import { useHomepageData } from "@/hooks/useData";

function ThreeKeyFigures() {
  return (
    <section className="statistics-section">
      <div className="statistics-section__intro">
        <SectionTitle
          title="Le club des familles en chiffres"
          paragraph="Lorem ipsum"
          versionWithTextAlign="section-title--version-with-text-align"
        />
      </div>
      <div className="statistics-section__stats">
        <div className="statistics-section__stat">
          <span className="statistics-section__number">{"+ 100"}</span>
          <span className="statistics-section__label">
            {"Lieux référencés"}
          </span>
        </div>
        <div className="statistics-section__stat">
          <span className="statistics-section__number">{"+ 40"}</span>
          <span className="statistics-section__label">{"Dénicheur.ses"}</span>
        </div>
        <div className="statistics-section__stat">
          <span className="statistics-section__number">{"9 730"}</span>
          <span className="statistics-section__label">
            {"Abonnés sur Instagram"}
          </span>
        </div>
      </div>
    </section>
  );
}

// function ThreeKeyFigures() {
//   const homepageContent = useHomepageData();

//   return (
//     <>
//       <section className="statistics-section">
//         <div className="statistics-section__container">
//           <SectionTitle
//             title={homepageContent?.ThreeKeyFigures?.SectionTitle || ""}
//             colorVersion="section-title--version-with-white-color"
//             versionWithTextAlign="section-title--version-with-text-align"
//           />

//           <div className="statistics-section__grid">
//             <div className="statistics-section__item">
//               <div className="statistics-section__value">
//                 {homepageContent?.ThreeKeyFigures?.FirstKeyFigureNumber || ""}
//               </div>
//               <div className="statistics-section__label">
//                 {homepageContent?.ThreeKeyFigures?.FirstKeyFigureParagraph ||
//                   ""}
//               </div>
//             </div>

//             <div className="statistics-section__item">
//               <div className="statistics-section__value">
//                 {homepageContent?.ThreeKeyFigures?.SecondKeyFigureNumber || ""}
//               </div>
//               <div className="statistics-section__label">
//                 {homepageContent?.ThreeKeyFigures?.SecondKeyFigureParagraph ||
//                   ""}
//               </div>
//             </div>

//             <div className="statistics-section__item">
//               <div className="statistics-section__value">
//                 {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureNumber || ""}
//               </div>
//               <div className="statistics-section__label">
//                 {homepageContent?.ThreeKeyFigures?.ThirdKeyFigureParagraph ||
//                   ""}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

export default ThreeKeyFigures;
