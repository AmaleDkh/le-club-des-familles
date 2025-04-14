"use client";

// Components
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";

// Hook
import { useHomepageData } from "@/hooks/useData";

export default function Home() {
  const homepageContent = useHomepageData();

  return (
    <>
      <Layout>
        {homepageContent?.[0] && (
          <Banner photo={homepageContent[0].banner_photo} />
        )}
        <ThreeKeyFigures />
      </Layout>
    </>
  );
}
