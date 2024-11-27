import "./DisplayAlbums.css";

interface Album {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  release_date: string;
}

interface Props {
  albums: Album[];
}

export default function DisplayAlbums({ albums }: Props) {
  return albums && albums.length > 0 ? (
    <section className="albums-section">
      <h2 className="section-title">Albums</h2>
      <ul className="albums-list">
        {albums.slice(0, 8).map((album) => (
          <li key={album.id} className="album-item">
            {album.images?.[0] && (
              <img
                src={album.images[0].url}
                alt={album.name}
                width="150"
                height="150"
              />
            )}
            <p>{album.name}</p>
            <p>Date de sortie : {album.release_date}</p>
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}
