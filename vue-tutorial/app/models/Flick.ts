export interface FlickModel {
  id: number;
  genre: string;
  title: string;
  image: string;
  url: string;
  description: string;
  details: {
    id: number;
    title: string;
    body: string;
  }[];
}
