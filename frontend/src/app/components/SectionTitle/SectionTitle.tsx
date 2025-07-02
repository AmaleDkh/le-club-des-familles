// Style
import "./SectionTitle.scss";

// Type
interface SectionTitleProps {
  title: string;
  colorVersion: string;
  versionWithTextAlign: string;
}

function SectionTitle({
  title,
  colorVersion,
  versionWithTextAlign,
}: SectionTitleProps) {
  return (
    <h2
      className={`section-title ${colorVersion} ${versionWithTextAlign}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
}

export default SectionTitle;
