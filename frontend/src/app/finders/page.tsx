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

function FindersPage() {
  // const homepageContent = useHomepageData();
  // const finderspageContent = useFinderspageData();

  return (
    <Layout>
      <PageTitle
        title="Deviens dénicheur·se pour le club"
        paragraph="Tu aimes partager tes bonnes adresses ? Tu repères les chaises hautes comme personne ? Rejoins le Club en tant que dénicheur·se et aide d’autres familles à vivre des sorties plus simples et plus chouettes."
      />

      <ImageAndTextSection
        title="Le rôle de dénicheur.se"
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

export default FindersPage;
