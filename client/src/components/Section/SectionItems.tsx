import "./SectionItems.css";
import LinkItem, { type LinkItemProps } from "./LinkItem";

type ListLinkItems = { listLinkItems: LinkItemProps[] };

function SectionItems({ listLinkItems }: ListLinkItems) {
  return (
    <nav className="playlists-section">
      {listLinkItems.map((linkItem: LinkItemProps) => (
        <LinkItem
          key={linkItem.href}
          imgSrc={linkItem.imgSrc}
          href={linkItem.href}
          title={linkItem.title}
        />
      ))}
    </nav>
  );
}

export default SectionItems;
