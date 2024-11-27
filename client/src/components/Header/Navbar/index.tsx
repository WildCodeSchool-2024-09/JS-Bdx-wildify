import "./Navbar.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  showLinks: boolean;
  setShowLinks: (value: boolean) => void;
}

export default function Navbar({ showLinks, setShowLinks }: NavbarProps) {
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const closeMenu = () => {
    setShowLinks(false);
  };
  return (
    <>
      <Link to="/" className="logo-link">
        WILDIFY
        <img src="../src/assets/logo/logo.svg" alt="logo" />
      </Link>
      <nav id="top">
        <ul className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
          <li>
            <Link to="/artists" className="link" onClick={closeMenu}>
              Artistes
            </Link>
          </li>
          <li>
            <Link to="/podcasts" className="link" onClick={closeMenu}>
              Podcasts
            </Link>
          </li>
          <li>
            <Link to="/Explorer" className="link" onClick={closeMenu}>
              Explorer
            </Link>
          </li>
          <li>
            <Link to="/coups-de-coeur" className="link" onClick={closeMenu}>
              Coups de ❤️
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbar-burger"
          onClick={handleShowLinks}
          aria-expanded={showLinks}
        >
          <span className="burger-bar"> </span>
        </button>
      </nav>
    </>
  );
}
