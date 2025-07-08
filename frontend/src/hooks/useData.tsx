"use client";

// React elements
import { useEffect, useState } from "react";

// API Calls
import {
  fetchHomepageContent,
  fetchLogo,
  fetchAboutpageContent,
  fetchFinderspageContent,
} from "@/utils/api";

type HeroBanner = {
  Title: string;
  Subtitle: string;
  Image: ImageData;
};

type ThreeKeyFigures = {
  SectionTitle: string;
  FirstKeyFigureNumber: string;
  FirstKeyFigureParagraph: string;
  SecondKeyFigureNumber: string;
  SecondKeyFigureParagraph: string;
  ThirdKeyFigureNumber: string;
  ThirdKeyFigureParagraph: string;
};

type JoinTheClub = {
  SectionTitle: string;
  DiggerImage: ImageData;
  // DiggerImage: string;
  DiggerTitle: string;
  DiggerText: string;
  // PartnerImage: string;
  PartnerImage: ImageData;
  PartnerTitle: string;
  PartnerText: string;
};

type Issues = {
  SectionTitle: string;
  FirstIssueTitle: string;
  FirstIssueText: string;
  SecondIssueTitle: string;
  SecondIssueText: string;
  ThirdIssueTitle: string;
  ThirdIssueText: string;
  IssuesText: string;
};

type Concept = {
  ConceptTitle: string;
  ConceptImage: ImageData;
  ConceptText: string;
};

type Badges = {
  SectionTitle: string;
  FirstBadgeTitle: string;
  FirstBadgeImage: ImageData;
  FirstBadgeText: string;
  SecondBadgeTitle: string;
  SecondBadgeImage: ImageData;
  SecondBadgeText: string;
  ThirdBadgeTitle: string;
  ThirdBadgeImage: ImageData;
  ThirdBadgeText: string;
  FourthBadgeTitle: string;
  FourthBadgeImage: ImageData;
  FourthBadgeText: string;
};

type FavoriteLocations = {
  SectionTitle: string;
};

type TeamSection = {
  SectionTitle: string;
  FirstMemberName: string;
  FirstMemberRole: string;
  FirstMemberBiography: string;
  FirstMemberPhoto: ImageData;
  SecondMemberName: string;
  SecondMemberRole: string;
  SecondMemberBiography: string;
  SecondMemberPhoto: ImageData;
  ThirdMemberName: string;
  ThirdMemberRole: string;
  ThirdMemberBiography: string;
  ThirdMemberPhoto: ImageData;
};

type Reviews = {
  SectionTitle: string;
  FirstReviewerName: string;
  FirstReviewerLocation: string;
  FirstReviewerPhoto: ImageData;
  FirstReviewerRating: number;
  FirstReviewerComment: string;
  SecondReviewerName: string;
  SecondReviewerLocation: string;
  SecondReviewerPhoto: ImageData;
  SecondReviewerRating: number;
  SecondReviewerComment: string;
  ThirdReviewerName: string;
  ThirdReviewerLocation: string;
  ThirdReviewerPhoto: ImageData;
  ThirdReviewerRating: number;
  ThirdReviewerComment: string;
  FourthReviewerName: string;
  FourthReviewerLocation: string;
  FourthReviewerPhoto: ImageData;
  FourthReviewerRating: number;
  FourthReviewerComment: string;
  FifthReviewerName: string;
  FifthReviewerLocation: string;
  FifthReviewerPhoto: ImageData;
  FifthReviewerRating: number;
  FifthReviewerComment: string;
  SixthReviewerName: string;
  SixthReviewerLocation: string;
  SixthReviewerPhoto: ImageData;
  SixthReviewerRating: number;
  SixthReviewerComment: string;
};

type ImageSeparator = {
  ImageSeparator: ImageData;
};

type TwoSameImagesAndTextSection = {
  SectionTitle: string;
  Paragraph: string;
  FirstImage: ImageData;
  SecondImage: ImageData;
};

type ImagesAndContentSection = {
  FirstTitle: string;
  FirstParagraph: string;
  FirstImage: ImageData;
  SecondTitle: string;
  SecondParagraph: string;
  SecondImage: ImageData;
  ThirdTitle: string;
  ThirdParagraph: string;
  ThirdImage: ImageData;
  FourthTitle: string;
  FourthParagraph: string;
  FourthImage: ImageData;
};

type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

type ImageData = {
  url: string;
  id: number;
  caption: string | null;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
};

type LogoContent = {
  Logo: ImageData;
};

type HomeContent = {
  HeroBanner: HeroBanner;
  ThreeKeyFigures: ThreeKeyFigures;
  JoinTheClub: JoinTheClub;
  Issues: Issues;
  Concept: Concept;
  Badges: Badges;
  FavoriteLocations: FavoriteLocations;
  Reviews: Reviews;
  ImageSeparator: ImageSeparator[];
};

type AboutContent = {
  TeamSection: TeamSection;
  ImagesAndContentSection: ImagesAndContentSection;
};

type FindersContent = {
  TwoSameImagesAndTextSection: TwoSameImagesAndTextSection;
};

export const useHomepageData = () => {
  const [homepageContent, setHomepageContent] = useState<HomeContent | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepagePageContentData = await fetchHomepageContent();

        const content = homepagePageContentData.data;

        setHomepageContent(content);
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

export const useAboutpageData = () => {
  const [aboutpageContent, setAboutpageContent] = useState<AboutContent | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutpageContentData = await fetchAboutpageContent();

        const content = aboutpageContentData.data;

        // console.log("content", content);

        setAboutpageContent(content);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return aboutpageContent;
};

export const useFinderspageData = () => {
  const [finderspageContent, setFinderspageContent] =
    useState<FindersContent | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const finderspageContentData = await fetchFinderspageContent();

        const content = finderspageContentData.data;

        // console.log("content", content);

        setFinderspageContent(content);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return finderspageContent;
};

export const useLogoData = () => {
  const [logoContent, setLogoContent] = useState<LogoContent | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const LogoContentData = await fetchLogo();

        console.log("LogoContentData", LogoContentData);

        const content = LogoContentData.data;

        console.log("content", content);

        setLogoContent(content);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return logoContent;
};
