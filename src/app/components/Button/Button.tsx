// Next element
import Link from "next/link";

// Style
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
  link: string;
  marginAutoVersion: string;
  marginTopVersion: string;
};

function Button({
  text,
  link,
  marginAutoVersion,
  marginTopVersion,
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={`button ${marginAutoVersion} ${marginTopVersion}`}
    >
      {text}
    </Link>
  );
}

export default Button;
