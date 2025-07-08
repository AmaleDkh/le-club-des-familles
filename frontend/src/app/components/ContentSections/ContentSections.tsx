"use client";

// Component
import ImagesAndContentSection from "../ImagesAndContentSection/ImagesAndContentSection";
import Logo from "../Logo/Logo";

// Style
import "./ContentSections.scss";

interface ContentSectionsProps {
  firstTitle: string;
  firstParagraph: string;
  firstImage: string;
  secondTitle: string;
  secondParagraph: string;
  secondImage: string;
  thirdTitle: string;
  thirdParagraph: string;
  thirdImage: string;
  fourthTitle: string;
  fourthParagraph: string;
  fourthImage: string;
}

function ContentSections({
  firstTitle,
  firstParagraph,
  firstImage,
  secondTitle,
  secondParagraph,
  secondImage,
  thirdTitle,
  thirdParagraph,
  thirdImage,
  fourthTitle,
  fourthParagraph,
  fourthImage,
}: ContentSectionsProps) {
  return (
    <section className="content-sections">
      <div className="container">
        <div className="content-part">
          <ImagesAndContentSection
            imageSrc={firstImage}
            imageAlt="Image 1"
            firstTitle={firstTitle}
            firstParagraph={firstParagraph}
          />

          <ImagesAndContentSection
            imageSrc={secondImage}
            imageAlt="Image 2"
            secondTitle={secondTitle}
            secondParagraph={secondParagraph}
            reverse={true}
            imageSize="small"
          />
        </div>

        <Logo className="logo-center" />

        <div className="content-part">
          <ImagesAndContentSection
            imageSrc={thirdImage}
            imageAlt="Image 3"
            firstTitle={thirdTitle}
            firstParagraph={thirdParagraph}
            imageSize="small"
          />

          <ImagesAndContentSection
            imageSrc={fourthImage}
            imageAlt="Image 4"
            secondTitle={fourthTitle}
            secondParagraph={fourthParagraph}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSections;
