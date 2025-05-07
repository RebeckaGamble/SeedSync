import type { TFunction } from "i18next";
import { spring, summer, autumn, winter } from "../../../assets";

interface CarouselSlide {
  title: string;
  text?: string;
  backgroundColor: string;
  darkBackgroundColor: string;
  image: string;
  link: string;
}

export const getCarouselData = (t: TFunction): CarouselSlide[] => [
  {
    title: t("carousel.spring.title"),
    text: t("carousel.spring.text"),
    backgroundColor: "bg-amber-50",
    darkBackgroundColor: "dark:bg-amber-900/30",
    image: spring,
    link: "/tips",
  },
  {
    title: t("carousel.summer.title"),
    text: t("carousel.summer.text"),
    backgroundColor: "bg-green-50",
    darkBackgroundColor: "dark:bg-green-900/30",
    image: summer,
    link: "/tips",
  },
  {
    title: t("carousel.fall.title"),
    text: t("carousel.fall.text"),
    backgroundColor: "bg-orange-50",
    darkBackgroundColor: "dark:bg-orange-900/30",
    image: autumn,
    link: "/tips",
  },
  {
    title: t("carousel.winter.title"),
    text: t("carousel.winter.text"),
    backgroundColor: "bg-blue-50",
    darkBackgroundColor: "dark:bg-blue-900/30",
    image: winter,
    link: "/tips",
  },
];
