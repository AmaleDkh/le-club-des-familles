"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import AllThePlaces from "../components/AllThePlaces/AllThePlaces";
// import BadgesSection from "../components/BadgesSection/BadgesSection";
import FavoriteLocations from "../components/FavoriteLocations/FavoriteLocations";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
// import ImageSeparator from "../components/ImageSeparator/ImageSeparator";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

import Test from "../../app/assets/Test.jpg";

// Hook
import { useHomepageData } from "@/hooks/useData";

function PlacesPage() {
  const homepageContent = useHomepageData();

  return (
    <Layout>
      <PageTitle
        title="Tous les lieux"
        paragraph="Des lieux testés et approuvés par les familles, pour que chaque sortie soit un moment de bonheur."
      />

      <AllThePlaces />

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

      <FavoriteLocations
        title="Les coups de coeur des familles"
        // title={homepageContent?.FavoriteLocations.SectionTitle || ""}
        buttonVersion={true}
      />

      <ReviewsSection image={Test} />

      <JoinTheClub />

      {/* <ReviewsSection title={homepageContent?.Reviews.SectionTitle || ""} /> */}

      {/* <ImageSeparator
        imageUrl={homepageContent?.ImageSeparator?.[0].ImageSeparator.url || ""}
        imageAlt=""
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

      {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
    </Layout>
  );
}

export default PlacesPage;
