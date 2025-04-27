"use client";

// Components
import Layout from "./components/Layout/Layout";
// import Banner from "./components/Banner/Banner";
// import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
// import IssuesSection from "./components/IssuesSection/IssuesSection";
// import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import BadgesSection from "./components/BadgesSection/BadgesSection";
import FavoriteLocations from "./components/FavoriteLocations/FavoriteLocations";
import JoinTheClub from "./components/JoinTheClub/JoinTheClub";
import ImageSeparator from "./components/ImageSeparator/ImageSeparator";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";

// Hook
import { useHomepageData } from "@/hooks/useData";

export default function Home() {
  const homepageContent = useHomepageData();

  return (
    <>
      <Layout>
        {/* {homepageContent?.[0] && (
          <Banner photo={homepageContent[0].banner_photo} />
        )} */}

        {/* <ThreeKeyFigures /> */}

        {homepageContent?.[0] && (
          <>
            {/* <IssuesSection
              title={homepageContent[0].issues_title}
              firstIssueTitle={homepageContent[0].first_issue_title}
              firstIssueText={homepageContent[0].first_issue_text}
              secondIssueTitle={homepageContent[0].second_issue_title}
              secondIssueText={homepageContent[0].second_issue_text}
              thirdIssueTitle={homepageContent[0].third_issue_title}
              thirdIssueText={homepageContent[0].third_issue_text}
              paragraph={homepageContent[0].issues_paragraph}
            />

            <ImageAndTextSection
              title={homepageContent[0].concept_title}
              image={homepageContent[0].concept_image}
              paragraph={homepageContent[0].concept_text}
              marginVersion=""
              buttonVersion={true}
            /> */}

            <BadgesSection
              title={homepageContent[0].badges_title}
              firstBadgeImage={homepageContent[0].first_badge_image}
              firstBadgeTitle={homepageContent[0].first_badge_title}
              firstBadgeParagraph={homepageContent[0].second_badge_paragraph}
              secondBadgeImage={homepageContent[0].second_badge_image}
              secondBadgeTitle={homepageContent[0].second_badge_title}
              secondBadgeParagraph={homepageContent[0].third_badge_paragraph}
              thirdBadgeImage={homepageContent[0].third_badge_image}
              thirdBadgeTitle={homepageContent[0].third_badge_title}
              thirdBadgeParagraph={homepageContent[0].first_badge_paragraph}
              fourthBadgeImage={homepageContent[0].fourth_badge_image}
              fourthBadgeTitle={homepageContent[0].fourth_badge_title}
              fourthBadgeParagraph={homepageContent[0].fourth_badge_paragraph}
            />

            <ImageSeparator imageUrl="" imageAlt="" />

            <FavoriteLocations
              title={homepageContent[0].favorite_locations_title}
              buttonVersion={true}
            />

            <ImageSeparator imageUrl="" imageAlt="" />

            <JoinTheClub
              title={homepageContent[0].join_the_club_title}
              diggerImage={homepageContent[0].join_the_club_digger_image}
              diggerTitle={homepageContent[0].join_the_club_digger_title}
              diggerText={homepageContent[0].join_the_club_digger_text}
              partnerImage={homepageContent[0].join_the_club_partner_image}
              partnerTitle={homepageContent[0].join_the_club_partner_title}
              partnerText={homepageContent[0].join_the_club_partner_text}
            />

            <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" />
          </>
        )}
      </Layout>
    </>
  );
}
