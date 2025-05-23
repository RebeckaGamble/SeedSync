// export type Tip = {
//   id: string;
//   cardTitle: string;
//   cardDescription: string;
//   cardIcon: "leaf" | "sprout" | "droplet" | "carrot";
// };

// export type Seasonal = {
//   id: string;
//   cardTitle: string;
//   cardDescription?: string;
//   image: string;
//   link: string;
// }

export type Tip = {
  id: string;
  cardTitle: string;
  cardDescription: string;
  cardIcon?: string;
  image?: string;
  link?: string;
  tags?: string[];
  icon?: string;
  isSeasonal?: boolean;
  seasonalLabel?: string;
  month?: string;
  fullContent?: string;
}
