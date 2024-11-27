import { useEffect, useRef, useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import SearchResultList from "./SearchResultsList";
import "./Searchbar.css";

function Searchbar() {
  const { searchTerm, setSearchTerm, performSearch, searchResults } =
    useSearch();
  const [isFocused, setIsFocused] = useState(false);
  const searchbarRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    performSearch();
    setIsFocused(true);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 200);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="searchbar-container" ref={searchbarRef}>
      <div className="searchbar-input-wrapper">
        <input
          type="search"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label="Champ de recherche"
          className="search-input"
        />
        <button
          type="button"
          className="search-button"
          onClick={handleSubmit}
          aria-label="Valider la recherche"
        >
          Recherche
        </button>
      </div>

      {isFocused && searchTerm && searchResults && (
        <div className="dropdown-menu">
          <ul>
            {searchResults.artists?.items &&
              searchResults.artists.items.length > 0 && (
                <SearchResultList
                  items={searchResults.artists.items}
                  title="Artistes"
                  type="artist"
                />
              )}

            {searchResults.albums?.items &&
              searchResults.albums.items.length > 0 && (
                <SearchResultList
                  items={searchResults.albums.items}
                  title="Albums"
                  type="album"
                />
              )}

            {searchResults.shows?.items &&
              searchResults.shows.items.length > 0 && (
                <SearchResultList
                  items={searchResults.shows.items}
                  title="Podcasts"
                  type="shows"
                />
              )}
          </ul>
        </div>
      )}
    </form>
  );
}

export default Searchbar;
