import type { TFunction } from "i18next";
import { spring, summer, autumn, winter } from "../../../assets";
import type { Tip } from "@/types/tip";


export const getCarouselData = (t: TFunction): Tip[] => [
  {
    id: "spring-planting",
    cardTitle: t("carousel.spring.title"),
    cardDescription: t("carousel.spring.text"),
    image: spring,
    link: "/tips?highlight=spring-planting",
    fullContent: t("carousel.spring.fullContent"),
    tags: t('carousel.spring.tags', { returnObjects: true}) as string[]
  },
  {
    id: "summer-care",
    cardTitle: t("carousel.summer.title"),
    cardDescription: t("carousel.summer.text"),
    image: summer,
    link: "/tips?highlight=summer-care",
    fullContent: t("carousel.summer.fullContent"),
    tags: t('carousel.summer.tags', { returnObjects: true}) as string[]
  },
  {
    id: "fall-harvest",
    cardTitle: t("carousel.fall.title"),
    cardDescription: t("carousel.fall.text"),
    image: autumn,
    link: "/tips?highlight=fall-harvest",
    fullContent: t("carousel.fall.fullContent"),
    tags: t('carousel.fall.tags', { returnObjects: true}) as string[]
  },
  {
    id: "winter-prep",
    cardTitle: t("carousel.winter.title"),
    cardDescription: t("carousel.winter.text"),
    image: winter,
    link: "/tips?highlight=winter-prep",
    fullContent: t("carousel.winter.fullContent"),
    tags: t('carousel.winter.tags', { returnObjects: true}) as string[]
  },
];
