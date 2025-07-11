"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import TwoSameImagesAndTextSection from "../components/TwoSameImagesAndTextSection/TwoSameImagesAndTextSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import FavoriteLocations from "../components/FavoriteLocations/FavoriteLocations";
import ContactForm from "../components/ContactForm/ContactForm";
// import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

// Hooks
import { useHomepageData, useFinderspageData } from "@/hooks/useData";

function FindersPage() {
  const homepageContent = useHomepageData();
  const finderspageContent = useFinderspageData();

  return (
    <Layout>
      <PageTitle
        title="REJOIGNEZ LE CLUB EN TANT QUE DÉNICHEUR.SE"
        paragraph=""
      />

      <TwoSameImagesAndTextSection
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
      />

      <ReviewsSection title={homepageContent?.Reviews.SectionTitle || ""} />

      <FavoriteLocations
        title={homepageContent?.FavoriteLocations.SectionTitle || ""}
        buttonVersion={true}
      />

      <ContactForm />

      {/* <InstagramFeed paddingTopVersion="instagram-feed--no-padding-top-version" /> */}
    </Layout>
  );
}

export default FindersPage;
