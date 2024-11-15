import { useEffect, useState } from "react";
import MyBlocks from "./MyBlocks";

type PlaylistItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function GetPlaylists() {
  const [userPlaylists, setUserPlaylists] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/userPlaylists`)
      .then((response) => response.json())
      .then((data) => setUserPlaylists(data.items))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  return <MyBlocks items={userPlaylists} />;
}
