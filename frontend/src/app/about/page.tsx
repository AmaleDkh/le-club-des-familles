"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import BadgesSection from "../components/BadgesSection/BadgesSection";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

// Hook
import { useHomepageData } from "@/hooks/useData";

function AboutPage() {
  const homepageContent = useHomepageData();

  return (
    <Layout>
      <PageTitle title="LE CLUB DES FAMILLES, C’EST QUOI ?" paragraph="" />

      <BadgesSection
        title={homepageContent?.Badges.SectionTitle || ""}
        firstBadgeImage={homepageContent?.Badges.FirstBadgeImage.url || ""}
        firstBadgeTitle={homepageContent?.Badges.FirstBadgeTitle || ""}
        firstBadgeParagraph={homepageContent?.Badges.FirstBadgeText || ""}
        secondBadgeImage={homepageContent?.Badges.SecondBadgeImage.url || ""}
        secondBadgeTitle={homepageContent?.Badges.SecondBadgeTitle || ""}
        secondBadgeParagraph={homepageContent?.Badges.SecondBadgeText || ""}
        thirdBadgeImage={homepageContent?.Badges.ThirdBadgeImage.url || ""}
        thirdBadgeTitle={homepageContent?.Badges.ThirdBadgeTitle || ""}
        thirdBadgeParagraph={homepageContent?.Badges.ThirdBadgeText || ""}
        fourthBadgeImage={homepageContent?.Badges.FourthBadgeImage.url || ""}
        fourthBadgeTitle={homepageContent?.Badges.FourthBadgeTitle || ""}
        fourthBadgeParagraph={homepageContent?.Badges.FourthBadgeText || ""}
      />

      <JoinTheClub
        title={homepageContent?.JoinTheClub?.SectionTitle || ""}
        diggerImage={homepageContent?.JoinTheClub?.DiggerImage.url || ""}
        diggerTitle={homepageContent?.JoinTheClub?.DiggerTitle || ""}
        diggerText={homepageContent?.JoinTheClub?.DiggerText || ""}
        partnerImage={
          homepageContent?.JoinTheClub?.PartnerImage.formats.medium?.url || ""
        }
        partnerTitle={homepageContent?.JoinTheClub?.PartnerTitle || ""}
        partnerText={homepageContent?.JoinTheClub?.PartnerText || ""}
      />

      {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
    </Layout>
  );
}

export default AboutPage;
