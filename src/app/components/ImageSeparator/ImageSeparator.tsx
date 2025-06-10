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
  return (
    <div className="image-separator">
      <Image src={imageUrl} alt={imageAlt} className="image-separator__image" />
      <div className="image-separator__overlay" />
    </div>
  );
}

export default ImageSeparator;
