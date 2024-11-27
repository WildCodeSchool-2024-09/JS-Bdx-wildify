import { useEffect } from "react";
import SectionItems from "../../components/Section/SectionItems";
import ArtistSearch from "../../components/displayBlocks/MyArtistsSearch";
import ImageBlockArtists from "../../components/imageBlock/imageBlockArtists";

export default function Artists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listLinks = [
    {
      title: "Playlists",
      href: "/",
      imgSrc: "./src/assets/images/playlist.jpg",
    },
    {
      title: "Podcasts",
      href: "/podcasts",
      imgSrc: "./src/assets/images/podcast.jpg",
    },
  ];
  return (
    <>
      <ImageBlockArtists />
      <ArtistSearch />
      <SectionItems listLinkItems={listLinks} />
    </>
  );
}
