// Style
import "./ThreeKeyFigures.scss";

// Hook
import { useHomepageData } from "@/hooks/useData";

function ThreeKeyFigures() {
  const homepageContent = useHomepageData();

  return (
    <>
      {homepageContent?.[0] && (
        <section className="three-key-figures">
          <div className="three-key-figures__block">
            <span className="three-key-figures__block__number">
              {homepageContent[0].locations_referenced_number}
            </span>
            <p className="three-key-figures__block__text">
              {homepageContent[0].locations_referenced_words}
            </p>
          </div>

          <div className="three-key-figures__block">
            <span className="three-key-figures__block__number">
              {homepageContent[0].scouts_number}
            </span>
            <p className="three-key-figures__block__text">
              {homepageContent[0].scouts_words}
            </p>
          </div>

          <div className="three-key-figures__block">
            <span className="three-key-figures__block__number">
              {homepageContent[0].instagram_followers_number}
            </span>
            <p className="three-key-figures__block__text">
              {homepageContent[0].instagram_followers_words}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default ThreeKeyFigures;
