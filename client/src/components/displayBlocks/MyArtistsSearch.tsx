import { useEffect, useState } from "react";
import MyBlocks from "./MyBlocks";

type ArtistItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function ArtistSearch() {
  const [userArtists, setUserArtists] = useState<ArtistItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/userArtists`)
      .then((response) => response.json())
      .then((data) => setUserArtists(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <MyBlocks items={userArtists} />;
}
