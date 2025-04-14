// Next element
import Image from "next/image";

// Style
import "./Banner.scss";

interface BannerProps {
  photo: string;
}

function Banner({ photo }: BannerProps) {
  return (
    <Image
      src={photo}
      alt=""
      className="banner__photo"
      width={1920}
      height={1000}
    />
  );
}

export default Banner;
