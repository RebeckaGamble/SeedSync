import type { TFunction } from "i18next";
import { spring, summer, autumn, winter } from "../../../assets";

interface CarouselSlide {
  title: string;
  text?: string;
  image: string;
  link: string;
}

export const getCarouselData = (t: TFunction): CarouselSlide[] => [
  {
    title: t("carousel.spring.title"),
    text: t("carousel.spring.text"),
    image: spring,
    link: "/tips",
  },
  {
    title: t("carousel.summer.title"),
    text: t("carousel.summer.text"),
    image: summer,
    link: "/tips",
  },
  {
    title: t("carousel.fall.title"),
    text: t("carousel.fall.text"),
    image: autumn,
    link: "/tips",
  },
  {
    title: t("carousel.winter.title"),
    text: t("carousel.winter.text"),
    image: winter,
    link: "/tips",
  },
];
