"use client";

// React elements
import { useEffect, useState } from "react";

// API Call
import { fetchHomepageContent } from "@/utils/api";

type HomepageContent = {
  page_title: string;
};

export const useHomepageData = () => {
  const [homepageContent, setHomepageContent] = useState<HomepageContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepageContentData = await fetchHomepageContent();

        const homepage = homepageContentData.map(
          (HomepageContent: { acf: HomepageContent }) => HomepageContent.acf
        );

        setHomepageContent(homepage);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return homepageContent;
};
