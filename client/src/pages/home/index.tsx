import "../../App.css";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import ImageBlockHome from "../../components/imageBlock/imageBlockHome";

export default function Home() {
  return (
    <main>
      <ImageBlockHome />
      <GetPlaylists />
    </main>
  );
}
