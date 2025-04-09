// Next element
import Link from "next/link";

// Style
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
  link: string;
};

function Button({ text, link }: ButtonProps) {
  return (
    <Link href={link} className="button">
      {text}
    </Link>
  );
}

export default Button;
