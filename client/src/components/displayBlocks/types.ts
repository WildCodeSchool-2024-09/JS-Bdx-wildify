export type DisplayItem = {
  genres?: string[];
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};
