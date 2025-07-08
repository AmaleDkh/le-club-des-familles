const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Next element
import Image from "next/image";

// Style
import "./ImageSeparator.scss";

// Type
interface ImageSeparatorProps {
  imageUrl: string;
  imageAlt: string;
}

function ImageSeparator({ imageUrl, imageAlt }: ImageSeparatorProps) {
  const baseUrl = apiStrapiUrl || "";

  return (
    <div className="image-separator">
      <Image
        src={imageUrl.startsWith("http") ? imageUrl : baseUrl + imageUrl}
        alt={imageAlt}
        className="image-separator__image"
        width={2000}
        height={2000}
      />
      <div className="image-separator__overlay" />
    </div>
  );
}

export default ImageSeparator;
