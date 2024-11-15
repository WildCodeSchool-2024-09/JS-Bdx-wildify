import "../../App.css";
import PodcastSearch from "../../components/displayBlocks/MyPodcastsSearch";
import ImageBlockPodcasts from "../../components/imageBlock/imageBlockPodcasts";

export default function Podcasts() {
  return (
    <main>
      <ImageBlockPodcasts />
      <PodcastSearch />
    </main>
  );
}
