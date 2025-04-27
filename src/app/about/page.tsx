"use client";

// Component
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import BadgesSection from "../components/BadgesSection/BadgesSection";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

// Hook
import { useHomepageData } from "@/hooks/useData";

function AboutPage() {
  const homepageContent = useHomepageData();

  return (
    <Layout>
      <PageTitle title="Titre" paragraph="" />

      {homepageContent?.[0] && (
        <>
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

          <JoinTheClub
            title={homepageContent[0].join_the_club_title}
            diggerImage={homepageContent[0].join_the_club_digger_image}
            diggerTitle={homepageContent[0].join_the_club_digger_title}
            diggerText={homepageContent[0].join_the_club_digger_text}
            partnerImage={homepageContent[0].join_the_club_partner_image}
            partnerTitle={homepageContent[0].join_the_club_partner_title}
            partnerText={homepageContent[0].join_the_club_partner_text}
          />
        </>
      )}

      <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" />
    </Layout>
  );
}

export default AboutPage;
