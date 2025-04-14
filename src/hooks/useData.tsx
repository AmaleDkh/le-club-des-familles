"use client";

// React elements
import { useEffect, useState } from "react";

// API Calls
import { fetchHomepageContent, fetchLogo } from "@/utils/api";

type HomepageContent = {
  page_title: string;
  banner_photo: string;
  locations_referenced_number: string;
  locations_referenced_words: string;
  scouts_number: string;
  scouts_words: string;
  instagram_followers_number: string;
  instagram_followers_words: string;
};

type Logo = {
  logo_white_version: string;
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

export const useLogoData = () => {
  const [LogoContent, setLogoContent] = useState<Logo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const LogoContentData = await fetchLogo();
        console.log(LogoContentData);

        const logo = LogoContentData.map(
          (LogoContent: { acf: Logo }) => LogoContent.acf
        );

        setLogoContent(logo);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return LogoContent;
};
