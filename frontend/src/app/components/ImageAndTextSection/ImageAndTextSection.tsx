const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

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
  const baseUrl = apiStrapiUrl || "";

  const imageUrl = baseUrl + image;

  return (
    <section className={`image-and-text-section ${marginVersion}`}>
      <h2 className="image-and-text-section__title">{title}</h2>

      <div className="image-and-text-section__content">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title || "Test"}
            width={440}
            height={600}
            className="image-and-text-section__content__image"
          />
        ) : null}

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
