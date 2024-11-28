import "./DisplayBlocks.css";
import type { DisplayItem } from "./types";

type MyBlocksProps = {
  items: DisplayItem[];
};

export default function MyBlocks({ items }: MyBlocksProps) {
  const MAX_ITEMS_DISPLAYED = 4;
  return (
    <article className="blocks">
      <ul>
        {items && items.length > 0 ? (
          items
            .filter((item) => item?.external_urls)
            .slice(0, MAX_ITEMS_DISPLAYED)
            .map((item) => (
              <li key={item.id}>
                <a
                  href={item.external_urls?.spotify || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.images?.[0]?.url && (
                    <img src={item.images[0].url} alt={item.name} />
                  )}
                  <h3>{item.name}</h3>
                  {item.genres?.length && (
                    <p>Genre: {item.genres?.join(", ")}</p>
                  )}
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
