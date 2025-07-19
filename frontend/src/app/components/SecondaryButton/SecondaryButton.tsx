// Next element
import Link from "next/link";

// Style
import "./SecondaryButton.scss";

// Type
type ButtonProps = {
  link: string;
  label: string;
  // centerVersion?: string;
};

function SecondaryButton({ link, label }: ButtonProps) {
  return (
    // <Link href={link} className={`secondary-button ${centerVersion}`}>
    //   {label}
    // </Link>

    <div className="button-wrapper">
      <Link className="secondary-button" href={link}>
        <span className="secondary-button__button-text"> {label}</span>
      </Link>
    </div>
  );
}

export default SecondaryButton;
