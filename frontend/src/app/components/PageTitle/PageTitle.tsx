// Style
import "./PageTitle.scss";

interface PageTitleProps {
  title: string;
  paragraph?: string;
}

function PageTitle({ title, paragraph }: PageTitleProps) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p className="page-title__paragraph">{paragraph}</p>
    </div>
  );
}

export default PageTitle;
