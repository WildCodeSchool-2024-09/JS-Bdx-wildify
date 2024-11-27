import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchUtils";
import MyBlocks from "./MyBlocks";
import type { DisplayItem } from "./types";

export default function GetPlaylists() {
  const [userPlaylists, setUserPlaylists] = useState<DisplayItem[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await fetchData<{ items: DisplayItem[] }>("/me/playlists");
      if (data) {
        setUserPlaylists(data.items);
      }
    };

    fetchPlaylists();
  }, []);

  return <MyBlocks items={userPlaylists} />;
}
