// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./ImageAndTextSection.scss";

interface ImageAndTextSectionProps {
  title: string;
  paragraph: string;
  image: string;
  marginVersion: string;
  buttonVersion: boolean;
}

function ImageAndTextSection({
  title,
  paragraph,
  image,
  marginVersion,
  buttonVersion,
}: ImageAndTextSectionProps) {
  return (
    <section className={`image-and-text-section ${marginVersion}`}>
      <h2 className="image-and-text-section__title">{title}</h2>

      <div className="image-and-text-section__content">
        <Image
          src={image}
          alt=""
          className="image-and-text-section__content__image"
          width={440}
          height={600}
        />

        <div className="image-and-text-section__content__texts">
          <p
            className="image-and-text-section__content__texts__paragraph"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
          {buttonVersion === true && (
            <Button text="Découvrez tous les lieux family-friendly" link="" />
          )}
        </div>
      </div>
    </section>
  );
}

export default ImageAndTextSection;
