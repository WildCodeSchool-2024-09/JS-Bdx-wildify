import "./DisplayTracks.css";

interface TopTrack {
  id: string;
  name: string;
  preview_url: string;
  album: {
    images: {
      url: string;
    }[];
  };
}

interface Props {
  topTracks: TopTrack[];
}

export default function DisplayTracks({ topTracks }: Props) {
  const MAX_TRACKS_DISPLAYED = 3;
  return topTracks && topTracks.length > 0 ? (
    <section className="top-tracks-section">
      <h2 className="section-title">Top Titres</h2>
      <ul className="top-tracks-list">
        {topTracks.slice(0, MAX_TRACKS_DISPLAYED).map((track) => (
          <li key={track.id} className="track-item">
            {track.album.images?.[0] && (
              <img
                src={track.album.images[0].url}
                alt={`Album cover for ${track.name}`}
                width="150"
                height="150"
              />
            )}
            <p>{track.name}</p>
            {track.preview_url && (
              <audio controls>
                <source src={track.preview_url} type="audio/mpeg" />
                <track kind="captions" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            )}
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}
