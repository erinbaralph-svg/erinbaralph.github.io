export type ImageData = {
  src: string;
  caption?: string;
};

export type ArticleData = {
  id: string
  title: string;
  date?: string;
  location?: string;
  description: string;
  images: ImageData[];
};
