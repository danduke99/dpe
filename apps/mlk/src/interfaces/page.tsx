export interface ActPro {
  id: number;
  coverImg: string;
  title: string;
  duration: string;
  participants: string[];
  price: number;
  longDesc: string;
  images: string[];
  socialLink: string;
  scope: "International" | "Local";
}