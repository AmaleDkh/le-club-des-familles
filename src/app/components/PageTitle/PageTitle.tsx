// Style
import "./PageTitle.scss";

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return <h1 className="page-title">{title}</h1>;
}

export default PageTitle;
