// Style
import "./SectionTitle.scss";

// Type
interface SectionTitleProps {
  title: string;
  paragraph?: string;
  colorVersion?: string;
  versionWithTextAlign?: string;
}

function SectionTitle({
  title,
  paragraph,
  colorVersion,
  versionWithTextAlign,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${versionWithTextAlign}`}>
      <h2
        className={`section-title__title ${colorVersion} `}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {paragraph && <p className="section-title__paragraph">{paragraph}</p>}
    </div>
  );
}

export default SectionTitle;
