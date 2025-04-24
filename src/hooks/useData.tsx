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
  issues_title: string;
  first_issue_title: string;
  first_issue_text: string;
  second_issue_title: string;
  second_issue_text: string;
  third_issue_title: string;
  third_issue_text: string;
  issues_paragraph: string;
  concept_title: string;
  concept_image: string;
  concept_text: string;
  badges_title: string;
  first_badge_image: string;
  first_badge_title: string;
  first_badge_paragraph: string;
  second_badge_image: string;
  second_badge_title: string;
  second_badge_paragraph: string;
  third_badge_image: string;
  third_badge_title: string;
  third_badge_paragraph: string;
  fourth_badge_image: string;
  fourth_badge_title: string;
  fourth_badge_paragraph: string;
  favorite_locations_title: string;
  join_the_club_title: string;
  join_the_club_digger_image: string;
  join_the_club_digger_title: string;
  join_the_club_digger_text: string;
  join_the_club_partner_image: string;
  join_the_club_partner_title: string;
  join_the_club_partner_text: string;
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
