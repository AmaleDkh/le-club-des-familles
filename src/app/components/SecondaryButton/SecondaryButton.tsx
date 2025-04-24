// Next element
import Link from "next/link";

// Style
import "./SecondaryButton.scss";

// Type
type ButtonProps = {
  link: string;
  label: string;
  centerVersion: string;
};

function SecondaryButton({ link, label, centerVersion }: ButtonProps) {
  return (
    <Link href={link} className={`secondary-button ${centerVersion}`}>
      {label}
    </Link>
  );
}

export default SecondaryButton;
