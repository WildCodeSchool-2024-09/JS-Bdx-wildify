import "./SectionItems.css";
import { Link } from "react-router-dom";

export interface LinkItemProps {
  title: string;
  href: string;
  imgSrc: string;
}

export default function LinkItem({ title, href, imgSrc }: LinkItemProps) {
  return (
    <Link to={href} className="component-item">
      <img src={imgSrc} alt="" className="component-image" />
      {title}
    </Link>
  );
}
