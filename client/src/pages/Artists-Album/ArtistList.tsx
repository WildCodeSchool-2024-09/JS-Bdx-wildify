type Artist = {
  id: number;
  name: string;
  picture: string;
  genres?: string[];
};

type ArtistListProps = {
  artists: Artist[];
};

function ArtistList({ artists }: ArtistListProps) {
  return (
    <div className="ArtistList">
      {artists.map((artist) => (
        <figure key={artist.id} className="DisplayEmployee">
          <img src={artist.picture} alt={artist.name} />
          <figcaption>
            <strong>{artist.name}</strong>
            {artist.genres && artist.genres.length > 0 && (
              <div className="genres">
                <p>Genres: {artist.genres.join(", ")}</p>
              </div>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ArtistList;
