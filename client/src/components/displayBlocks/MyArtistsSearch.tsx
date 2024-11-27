import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchUtils";
import MyBlocks from "./MyBlocks";
import type { DisplayItem } from "./types";

export default function ArtistSearch() {
  const [userArtists, setUserArtists] = useState<DisplayItem[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await fetchData<{ items: DisplayItem[] }>("/me/top/artists");
      if (data?.items) {
        setUserArtists(data.items);
      }
    };

    fetchArtists();
  }, []);

  return <MyBlocks items={userArtists} />;
}
