"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import BadgesSection from "../components/BadgesSection/BadgesSection";
import FavoriteLocations from "../components/FavoriteLocations/FavoriteLocations";
import JoinTheClub from "../components/JoinTheClub/JoinTheClub";
import ImageSeparator from "../components/ImageSeparator/ImageSeparator";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import AllThePlaces from "../components/AllThePlaces/AllThePlaces";

// Hook
import { useHomepageData } from "@/hooks/useData";

function PlacesPage() {
  const homepageContent = useHomepageData();

  return (
    <Layout>
      <PageTitle title="Tous les lieux" paragraph="" />

      <AllThePlaces />

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

          <FavoriteLocations
            title={homepageContent[0].favorite_locations_title}
            buttonVersion={false}
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
        </>
      )}

      <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" />
    </Layout>
  );
}

export default PlacesPage;
