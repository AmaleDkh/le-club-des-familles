"use client";

// Components
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
import IssuesSection from "./components/IssuesSection/IssuesSection";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";

// Hook
import { useHomepageData } from "@/hooks/useData";

export default function Home() {
  const homepageContent = useHomepageData();

  return (
    <>
      <Layout>
        {homepageContent?.[0] && (
          <Banner photo={homepageContent[0].banner_photo} />
        )}
        <ThreeKeyFigures />

        {homepageContent?.[0] && (
          <IssuesSection
            title={homepageContent[0].issues_title}
            firstIssueTitle={homepageContent[0].first_issue_title}
            firstIssueText={homepageContent[0].first_issue_text}
            secondIssueTitle={homepageContent[0].second_issue_title}
            secondIssueText={homepageContent[0].second_issue_text}
            thirdIssueTitle={homepageContent[0].third_issue_title}
            thirdIssueText={homepageContent[0].third_issue_text}
            paragraph={homepageContent[0].issues_paragraph}
          />
        )}

        {homepageContent?.[0] && (
          <ImageAndTextSection
            title={homepageContent[0].concept_title}
            image={homepageContent[0].concept_image}
            paragraph={homepageContent[0].concept_text}
            marginVersion=""
            buttonVersion={true}
          />
        )}
      </Layout>
    </>
  );
}
