"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import BadgesSection from "../components/BadgesSection/BadgesSection";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import TeamSection from "../components/TeamSection/TeamSection";
import ContentSections from "../components/ContentSections/ContentSections";

// Hooks
import { useHomepageData, useAboutpageData } from "@/hooks/useData";

function AboutPage() {
  const homepageContent = useHomepageData();
  const aboutpageContent = useAboutpageData();

  return (
    <Layout>
      <PageTitle title="LE CLUB DES FAMILLES, C’EST QUOI ?" paragraph="" />

      <ContentSections
        firstTitle={aboutpageContent?.ImagesAndContentSection.FirstTitle || ""}
        firstParagraph={
          aboutpageContent?.ImagesAndContentSection.FirstParagraph || ""
        }
        firstImage={
          aboutpageContent?.ImagesAndContentSection.FirstImage.url || ""
        }
        secondTitle={
          aboutpageContent?.ImagesAndContentSection.SecondTitle || ""
        }
        secondParagraph={
          aboutpageContent?.ImagesAndContentSection.SecondParagraph || ""
        }
        secondImage={
          aboutpageContent?.ImagesAndContentSection.SecondImage.url || ""
        }
        thirdTitle={aboutpageContent?.ImagesAndContentSection.ThirdTitle || ""}
        thirdParagraph={
          aboutpageContent?.ImagesAndContentSection.ThirdParagraph || ""
        }
        thirdImage={
          aboutpageContent?.ImagesAndContentSection.ThirdImage.url || ""
        }
        fourthTitle={aboutpageContent?.ImagesAndContentSection.ThirdTitle || ""}
        fourthParagraph={
          aboutpageContent?.ImagesAndContentSection.ThirdParagraph || ""
        }
        fourthImage={
          aboutpageContent?.ImagesAndContentSection.FourthImage.url || ""
        }
      />

      <TeamSection title={aboutpageContent?.TeamSection.SectionTitle || ""} />

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
