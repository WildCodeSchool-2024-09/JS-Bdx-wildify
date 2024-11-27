import { useEffect } from "react";
import "../../App.css";
import SectionItems from "../../components/Section/SectionItems";
import PodcastSearch from "../../components/displayBlocks/MyPodcastsSearch";
import ImageBlockPodcasts from "../../components/imageBlock/imageBlockPodcasts";

export default function Podcasts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const listLinks = [
    {
      title: "Artists",
      href: "/artists",
      imgSrc: "./src/assets/images/artistes.jpg",
    },
    {
      title: "Playlists",
      href: "/",
      imgSrc: "./src/assets/images/playlist.jpg",
    },
  ];
  return (
    <main>
      <ImageBlockPodcasts />
      <PodcastSearch />
      <SectionItems listLinkItems={listLinks} />
    </main>
  );
}
