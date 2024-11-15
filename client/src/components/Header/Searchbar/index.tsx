import "./style.css";

function Searchbar() {
  return (
    <form action="">
      <input
        type="search"
        placeholder="Recherche..."
        value=""
        aria-label="Champ de recherche"
      />
      <button
        type="submit"
        className="search-button"
        aria-label="Valider la recherche"
      >
        Valider
      </button>
    </form>
  );
}

export default Searchbar;
