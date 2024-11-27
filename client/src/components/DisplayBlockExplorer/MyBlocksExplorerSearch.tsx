import "../displayBlocks/DisplayBlocks.css";
import type { DisplayItem } from "../DisplayBlockExplorer/MyExplorerSearch";

type MyBlocksProps = {
  items: DisplayItem[];
};

export default function ExplorerSearch({ items }: MyBlocksProps) {
  return (
    <article className="blocks">
      <ul>
        {items && items.length > 0 ? (
          items.slice(0, 8).map((item) => (
            <li key={item.id} className="mrgn-bottom">
              <a
                href={item.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                {item.images[0] && (
                  <img src={item.images[0].url} alt={item.name} />
                )}
                <h3>{item.name}</h3>
                {item.genres && <p> Genre: {item.genres.join(", ")} </p>}
              </a>
            </li>
          ))
        ) : (
          <p>Mes données vont s'afficher ici</p>
        )}
      </ul>
    </article>
  );
}
