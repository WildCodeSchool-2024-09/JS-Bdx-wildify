import { useEffect } from "react";
import ExplorerSearch from "../../components/DisplayBlockExplorer/MyExplorerSearch";
import ImageBlockExplorer from "../../components/imageBlock/imageBlockExplorer";

export default function Explorer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ImageBlockExplorer />
      <ExplorerSearch />
    </main>
  );
}
