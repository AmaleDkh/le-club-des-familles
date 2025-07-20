"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
// import BadgesSection from "../components/BadgesSection/BadgesSection";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
import TeamSection from "../components/TeamSection/TeamSection";
import ContentSections from "../components/ContentSections/ContentSections";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
// import ContactForm from "../components/ContactForm/ContactForm";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

// Hooks
// import { useHomepageData, useAboutpageData } from "@/hooks/useData";

import Test from "../../app/assets/Test.jpg";

function AboutPage() {
  // const homepageContent = useHomepageData();
  // const aboutpageContent = useAboutpageData();

  return (
    <Layout>
      <PageTitle
        title="LE CLUB DES FAMILLES, C’EST QUOI ?"
        paragraph="Parce qu’on en avait assez de galérer à chaque sortie avec nos enfants."
      />

      <ContentSections
        firstImage={Test}
        secondImage={Test}
        thirdImage={Test}
        fourthImage={Test}
      />

      <TeamSection />

      <ReviewsSection image={Test} />

      <JoinTheClub />

      {/* <ContentSections
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
      /> */}

      {/* <TeamSection title={aboutpageContent?.TeamSection.SectionTitle || ""} /> */}

      {/* <BadgesSection
        firstBadgeImage={Test}
        secondBadgeImage={Test}
        thirdBadgeImage={Test}
        fourthBadgeImage={Test}
      /> */}

      {/* <BadgesSection
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
      /> */}

      {/* <JoinTheClub
        title={homepageContent?.JoinTheClub?.SectionTitle || ""}
        diggerImage={homepageContent?.JoinTheClub?.DiggerImage.url || ""}
        diggerTitle={homepageContent?.JoinTheClub?.DiggerTitle || ""}
        diggerText={homepageContent?.JoinTheClub?.DiggerText || ""}
        partnerImage={
          homepageContent?.JoinTheClub?.PartnerImage.formats.medium?.url || ""
        }
        partnerTitle={homepageContent?.JoinTheClub?.PartnerTitle || ""}
        partnerText={homepageContent?.JoinTheClub?.PartnerText || ""}
      /> */}

      {/* <ContactForm /> */}

      {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
    </Layout>
  );
}

export default AboutPage;
