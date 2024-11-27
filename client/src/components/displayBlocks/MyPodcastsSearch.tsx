import { useEffect, useState } from "react";
import { apiRequest } from "../../api/apiClient";
import MyBlocks from "./MyBlocks";

type PodcastItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function PodcastSearch() {
  const [userPodcasts, setUserPodcasts] = useState<PodcastItem[]>([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await apiRequest("/me/episodes");
        const data = await response.json();
        const shows = data.items.map(
          (item: { episode: PodcastItem }) => item.episode,
        );
        setUserPodcasts(shows);
      } catch (error) {
        console.error("Erreur lors de la récupération des podcasts :", error);
      }
    };

    fetchPodcasts();
  }, []);

  return <MyBlocks items={userPodcasts} />;
}
