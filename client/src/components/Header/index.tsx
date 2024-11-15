import "./style.css";
import { useState } from "react";
import Navbar from "./Navbar";
import Pseudo from "./Pseudo";
import Searchbar from "./Searchbar";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <Pseudo />
      <Searchbar />
    </header>
  );
}

export default Header;
