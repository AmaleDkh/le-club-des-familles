"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
// import TwoSameImagesAndTextSection from "../components/TwoSameImagesAndTextSection/TwoSameImagesAndTextSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
// import FavoriteLocations from "../components/FavoriteLocations/FavoriteLocations";
// import ContactForm from "../components/ContactForm/ContactForm";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import ImageAndTextSection from "../components/ImageAndTextSection/ImageAndTextSection";

// Hooks
// import { useHomepageData, useFinderspageData } from "@/hooks/useData";

import Test from "../../app/assets/Test.jpg";

function RestaurantOwnersPage() {
  // const homepageContent = useHomepageData();
  // const finderspageContent = useFinderspageData();

  return (
    <Layout>
      <PageTitle
        title="Deviens partenaire pour du club"
        paragraph="Vous aimez accueillir les familles ?
Vous avez une chaise haute, un menu enfant, ou simplement le sens de l’accueil ?
Rejoignez le Club en tant que partenaire et rendez votre lieu visible auprès d’une communauté de parents en quête de chouettes adresses."
      />

      <ImageAndTextSection
        title="Le rôle de partenaire"
        paragraph=""
        text=""
        image={Test}
      />

      <ReviewsSection image={Test} />

      {/* <TwoSameImagesAndTextSection
        title={
          finderspageContent?.TwoSameImagesAndTextSection.SectionTitle || ""
        }
        paragraph={
          finderspageContent?.TwoSameImagesAndTextSection.Paragraph || ""
        }
        leftImageUrl={
          finderspageContent?.TwoSameImagesAndTextSection.FirstImage.url || ""
        }
        rightImageUrl={
          finderspageContent?.TwoSameImagesAndTextSection.SecondImage.url || ""
        }
      /> */}

      {/* <ReviewsSection image={,} /> */}

      {/* <ReviewsSection title={homepageContent?.Reviews.SectionTitle || ""} /> */}

      {/* <FavoriteLocations
        title={homepageContent?.FavoriteLocations.SectionTitle || ""}
        buttonVersion={true}
      /> */}

      {/* <ContactForm /> */}

      {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
    </Layout>
  );
}

export default RestaurantOwnersPage;
