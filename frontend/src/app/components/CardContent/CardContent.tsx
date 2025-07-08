// Style
import "./CardContent.scss";

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

export default CardContent;
