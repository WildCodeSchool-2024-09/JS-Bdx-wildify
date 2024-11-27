import "./Header.css";
import { useState } from "react";
import Navbar from "./Navbar";
import PseudoDisplay from "./PseudoDisplay/PseudoDisplay";
import Searchbar from "./Searchbar";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <PseudoDisplay />
      <Searchbar />
    </header>
  );
}

export default Header;
