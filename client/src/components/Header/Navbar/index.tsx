import "./style.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  showLinks: boolean;
  setShowLinks: (value: boolean) => void;
}

function Navbar({ showLinks, setShowLinks }: NavbarProps) {
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
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
            <Link to="/artists" className="link">
              Artistes
            </Link>
          </li>
          <li>
            <Link to="/podcasts" className="link">
              Podcasts
            </Link>
          </li>
          <li>
            <Link to="/concerts" className="link">
              Concerts
            </Link>
          </li>
          <li>
            <Link to="/coups-de-coeur" className="link">
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

export default Navbar;
