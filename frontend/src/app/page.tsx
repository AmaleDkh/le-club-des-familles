"use client";

// Components
import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
import IssuesSection from "./components/IssuesSection/IssuesSection";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import BadgesSection from "./components/BadgesSection/BadgesSection";
import SituationsSection from "./components/SituationsSection/SituationsSection";
// import FavoriteLocations from "./components/FavoriteLocations/FavoriteLocations";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
// import ImageSeparator from "./components/ImageSeparator/ImageSeparator";
// import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
// import TextImageSection from "./components/TextImageSection/TextImageSection";

import Test from "../app/assets/Test.jpg";

// Hook
import { useHomepageData } from "@/hooks/useData";

export default function Home() {
  const homepageContent = useHomepageData();

  return (
    <>
      <Layout>
        <HeroBanner
          // title={homepageContent?.HeroBanner.Title || ""}
          // subtitle={homepageContent?.HeroBanner.Subtitle || ""}
          // photo={homepageContent?.HeroBanner.Image.url || ""}
          // title=""
          // subtitle=""
          image={Test}
        />

        <ThreeKeyFigures />

        <SituationsSection image={Test} />

        <ImageAndTextSection image={Test} />

        <BadgesSection
          firstBadgeImage={Test}
          secondBadgeImage={Test}
          thirdBadgeImage={Test}
          fourthBadgeImage={Test}
        />

        <ReviewsSection image={Test} />

        <>
          {/* <IssuesSection
            title={homepageContent?.Issues.SectionTitle || ""}
            firstIssueTitle={homepageContent?.Issues.FirstIssueTitle || ""}
            firstIssueText={homepageContent?.Issues.FirstIssueText || ""}
            secondIssueTitle={homepageContent?.Issues.SecondIssueTitle || ""}
            secondIssueText={homepageContent?.Issues.SecondIssueText || ""}
            thirdIssueTitle={homepageContent?.Issues.ThirdIssueTitle || ""}
            thirdIssueText={homepageContent?.Issues.ThirdIssueText || ""}
            paragraph={homepageContent?.Issues.IssuesText || ""}
          /> */}

          {/* {
            <ImageAndTextSection
              title={homepageContent?.Concept.ConceptTitle || ""}
              image={homepageContent?.Concept.ConceptImage.url || ""}
              paragraph={homepageContent?.Concept.ConceptText || ""}
              marginVersion=""
              buttonVersion={true}
              linkUrl="/places"
            />
          } */}
          {/* 
          <BadgesSection
            title={homepageContent?.Badges.SectionTitle || ""}
            firstBadgeImage={homepageContent?.Badges.FirstBadgeImage.url || ""}
            firstBadgeTitle={homepageContent?.Badges.FirstBadgeTitle || ""}
            firstBadgeParagraph={homepageContent?.Badges.FirstBadgeText || ""}
            secondBadgeImage={
              homepageContent?.Badges.SecondBadgeImage.url || ""
            }
            secondBadgeTitle={homepageContent?.Badges.SecondBadgeTitle || ""}
            secondBadgeParagraph={homepageContent?.Badges.SecondBadgeText || ""}
            thirdBadgeImage={homepageContent?.Badges.ThirdBadgeImage.url || ""}
            thirdBadgeTitle={homepageContent?.Badges.ThirdBadgeTitle || ""}
            thirdBadgeParagraph={homepageContent?.Badges.ThirdBadgeText || ""}
            fourthBadgeImage={
              homepageContent?.Badges.FourthBadgeImage.url || ""
            }
            fourthBadgeTitle={homepageContent?.Badges.FourthBadgeTitle || ""}
            fourthBadgeParagraph={homepageContent?.Badges.FourthBadgeText || ""}
          /> */}

          {/* <ImageSeparator
            imageUrl={
              homepageContent?.ImageSeparator?.[0].ImageSeparator.url || ""
            }
            imageAlt=""
          /> */}

          {/* <FavoriteLocations
            title={homepageContent?.FavoriteLocations.SectionTitle || ""}
            buttonVersion={true}
          /> */}

          {/* <ReviewsSection title={homepageContent?.Reviews.SectionTitle || ""} /> */}

          {/* <ImageSeparator
            imageUrl={
              homepageContent?.ImageSeparator?.[1].ImageSeparator.url || ""
            }
            imageAlt=""
          /> */}

          {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
        </>
        {/* )} */}
      </Layout>
    </>
  );
}
