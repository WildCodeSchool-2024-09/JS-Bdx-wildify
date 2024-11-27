import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../../api/apiClient";
import DisplayAlbums from "../../components/DisplayAlbums";
import DisplayTracks from "../../components/DisplayTracks";

interface ArtistDetailsProps {
  id: string;
  name: string;
  images?: {
    url: string;
  }[];
  genres?: string[];
}
interface Album {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  release_date: string;
}
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

function ArtistDetails() {
  const { artistId } = useParams<{ artistId: string }>();
  const [artist, setArtist] = useState<ArtistDetailsProps | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
  useEffect(() => {
    if (artistId) {
      Promise.all([
        apiRequest(`/artists/${artistId}`).then((response) => response.json()),
        apiRequest(`/artists/${artistId}/albums`).then((response) =>
          response.json(),
        ),
        apiRequest(`/artists/${artistId}/top-tracks?market=FR`).then(
          (response) => response.json(),
        ),
      ])
        .then(([artistData, albumsData, topTracksData]) => {
          setArtist(artistData);
          setAlbums(albumsData.items);
          setTopTracks(topTracksData.tracks);
        })
        .catch((error) =>
          console.error(
            "Erreur lors de la récupération des données de l'artiste :",
            error,
          ),
        );
    }
  }, [artistId]);

  if (!artist) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <section className="artist-details">
        <article
          className="background-image"
          style={{
            backgroundImage: artist.images?.[0]
              ? `url(${artist.images[0].url})`
              : undefined,
          }}
        >
          <h1>{artist.name}</h1>
        </article>
      </section>
      <DisplayAlbums albums={albums} />
      <DisplayTracks topTracks={topTracks} />
    </>
  );
}

export default ArtistDetails;
