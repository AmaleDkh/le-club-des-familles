// Next element
import Link from "next/link";

// Style
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
  link: string;
  marginAutoVersion: string;
};

function Button({ text, link, marginAutoVersion }: ButtonProps) {
  return (
    <Link href={link} className={`button ${marginAutoVersion}`}>
      {text}
    </Link>
  );
}

export default Button;
