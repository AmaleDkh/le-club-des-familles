// Style
import "./IssuesSection.scss";

interface IssuesSectionProps {
  title: string;
  firstIssueTitle: string;
  firstIssueText: string;
  secondIssueTitle: string;
  secondIssueText: string;
  thirdIssueTitle: string;
  thirdIssueText: string;
  paragraph: string;
}

function IssuesSection({
  title,
  firstIssueTitle,
  firstIssueText,
  secondIssueTitle,
  secondIssueText,
  thirdIssueTitle,
  thirdIssueText,
  paragraph,
}: IssuesSectionProps) {
  return (
    <section className="issues-section">
      <h2>{title}</h2>
      <ul className="issues-section__list">
        <li className="issues-section__list__item">
          <h3>{firstIssueTitle}</h3>
          <p>{firstIssueText}</p>
        </li>

        <li className="issues-section__list__item">
          <h3>{secondIssueTitle}</h3>
          <p>{secondIssueText}</p>
        </li>

        <li className="issues-section__list__item">
          <h3>{thirdIssueTitle}</h3>
          <p>{thirdIssueText}</p>
        </li>
      </ul>

      <p>{paragraph}</p>
    </section>
  );
}

export default IssuesSection;
