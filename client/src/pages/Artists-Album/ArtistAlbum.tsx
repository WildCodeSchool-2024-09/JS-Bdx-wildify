import { useState } from "react";
import ArtistList from "./ArtistList";

function ArtistAlbum() {
  const [artistsList, setArtists] = useState([]);

  const getArtists = () => {
    fetch("http://localhost:3310/api/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.results);
      });
  };
  return (
    <div className="App">
      <ArtistList artists={artistsList} />
      <button type="button" onClick={getArtists}>
        Get artists
      </button>
    </div>
  );
}

export default ArtistAlbum;
