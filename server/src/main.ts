// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const userPlaylists = {
  href: "https://api.spotify.com/v1/users/smedjan/playlists?offset=1&limit=6&locale=fr,fr-FR;q%3D0.8,en-US;q%3D0.5,en;q%3D0.3",
  limit: 6,
  next: "https://api.spotify.com/v1/users/smedjan/playlists?offset=7&limit=6&locale=fr,fr-FR;q%3D0.8,en-US;q%3D0.5,en;q%3D0.3",
  offset: 1,
  previous:
    "https://api.spotify.com/v1/users/smedjan/playlists?offset=0&limit=6&locale=fr,fr-FR;q%3D0.8,en-US;q%3D0.5,en;q%3D0.3",
  total: 98,
  items: [
    {
      collaborative: false,
      description:
        'A mish mash of a bunch of songs that you can maybe dance to. Curated by <a href="https://twitter.com/nicktoumpelis">Nick Toumpelis</a>. Photography by <a href="https://www.instagram.com/nicktoumpelis/">Nick Toumpelis</a>. ',
      external_urls: {
        spotify: "https://open.spotify.com/playlist/3tT3E3Q4u5Xd0v3ySPLR1O",
      },
      href: "https://api.spotify.com/v1/playlists/3tT3E3Q4u5Xd0v3ySPLR1O",
      id: "3tT3E3Q4u5Xd0v3ySPLR1O",
      images: [
        {
          height: null,
          url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f8496493a06aec2c3eda1a42",
          width: null,
        },
      ],
      name: "dance fusion",
      owner: {
        display_name: "Nick Toumpelis",
        external_urls: {
          spotify: "https://open.spotify.com/user/1226836970",
        },
        href: "https://api.spotify.com/v1/users/1226836970",
        id: "1226836970",
        type: "user",
        uri: "spotify:user:1226836970",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAAN3eephAMj/tM4sCQtXXGRL39TnfyI",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/3tT3E3Q4u5Xd0v3ySPLR1O/tracks",
        total: 22,
      },
      type: "playlist",
      uri: "spotify:playlist:3tT3E3Q4u5Xd0v3ySPLR1O",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/41R1UENL6yUDiRR2riptb7",
      },
      href: "https://api.spotify.com/v1/playlists/41R1UENL6yUDiRR2riptb7",
      id: "41R1UENL6yUDiRR2riptb7",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d00001e02087ae01edc17b3fbe0f44b28ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e027d4287bed60bfc5f13d96644ab67616d00001e02bef76218c65153abaed75e6e",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d00001e02087ae01edc17b3fbe0f44b28ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e027d4287bed60bfc5f13d96644ab67616d00001e02bef76218c65153abaed75e6e",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d00001e02087ae01edc17b3fbe0f44b28ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e027d4287bed60bfc5f13d96644ab67616d00001e02bef76218c65153abaed75e6e",
          width: 60,
        },
      ],
      name: "covers and under covers",
      owner: {
        display_name: "migo",
        external_urls: {
          spotify: "https://open.spotify.com/user/migo",
        },
        href: "https://api.spotify.com/v1/users/migo",
        id: "migo",
        type: "user",
        uri: "spotify:user:migo",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAAAIrLzEpQV6o/ItxCn5yAsgFr+fegH",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/41R1UENL6yUDiRR2riptb7/tracks",
        total: 21,
      },
      type: "playlist",
      uri: "spotify:playlist:41R1UENL6yUDiRR2riptb7",
    },
    {
      collaborative: false,
      description: "Bombastic tunes -- in some way or another",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6dSh5StaaE1XbIF5s7Lxng",
      },
      href: "https://api.spotify.com/v1/playlists/6dSh5StaaE1XbIF5s7Lxng",
      id: "6dSh5StaaE1XbIF5s7Lxng",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d00001e020dd350beeb5ac73672ad6e80ab67616d00001e02341b1e5f0395b17821491c7dab67616d00001e024ccb64f022a53d3e8ec84a20ab67616d00001e02e477610ef54781d751a9e319",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d00001e020dd350beeb5ac73672ad6e80ab67616d00001e02341b1e5f0395b17821491c7dab67616d00001e024ccb64f022a53d3e8ec84a20ab67616d00001e02e477610ef54781d751a9e319",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d00001e020dd350beeb5ac73672ad6e80ab67616d00001e02341b1e5f0395b17821491c7dab67616d00001e024ccb64f022a53d3e8ec84a20ab67616d00001e02e477610ef54781d751a9e319",
          width: 60,
        },
      ],
      name: "Fläskiga låtar",
      owner: {
        display_name: "migo",
        external_urls: {
          spotify: "https://open.spotify.com/user/migo",
        },
        href: "https://api.spotify.com/v1/users/migo",
        id: "migo",
        type: "user",
        uri: "spotify:user:migo",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAABDR+cig8lZhZCDMyEdhX8v8t8Pb6r",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6dSh5StaaE1XbIF5s7Lxng/tracks",
        total: 44,
      },
      type: "playlist",
      uri: "spotify:playlist:6dSh5StaaE1XbIF5s7Lxng",
    },
    {
      collaborative: false,
      description: "Migo",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6hBpet9cW4cVgn96xBJ5Ay",
      },
      href: "https://api.spotify.com/v1/playlists/6hBpet9cW4cVgn96xBJ5Ay",
      id: "6hBpet9cW4cVgn96xBJ5Ay",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d00001e021a0e01b6cd607bbc41c3ff4bab67616d00001e02578f1ac435ac326e48334f66ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e02e477610ef54781d751a9e319",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d00001e021a0e01b6cd607bbc41c3ff4bab67616d00001e02578f1ac435ac326e48334f66ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e02e477610ef54781d751a9e319",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d00001e021a0e01b6cd607bbc41c3ff4bab67616d00001e02578f1ac435ac326e48334f66ab67616d00001e02722ee6054732c347e335cb35ab67616d00001e02e477610ef54781d751a9e319",
          width: 60,
        },
      ],
      name: "migo1",
      owner: {
        display_name: "migo",
        external_urls: {
          spotify: "https://open.spotify.com/user/migo",
        },
        href: "https://api.spotify.com/v1/users/migo",
        id: "migo",
        type: "user",
        uri: "spotify:user:migo",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAAAbUWFczxCb7xWrXTgRM3XWd/LZXBy",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6hBpet9cW4cVgn96xBJ5Ay/tracks",
        total: 66,
      },
      type: "playlist",
      uri: "spotify:playlist:6hBpet9cW4cVgn96xBJ5Ay",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/47s8Pj6MjV5UWYEaHIe9ZH",
      },
      href: "https://api.spotify.com/v1/playlists/47s8Pj6MjV5UWYEaHIe9ZH",
      id: "47s8Pj6MjV5UWYEaHIe9ZH",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d00001e023a2d2b9621ef645380c63c16ab67616d00001e02ba4c798ab356b8adb64bb2fcab67616d00001e02ba6132f887666a2627eb8a56ab67616d00001e02dbe9c4609ec382dcc0391e62",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d00001e023a2d2b9621ef645380c63c16ab67616d00001e02ba4c798ab356b8adb64bb2fcab67616d00001e02ba6132f887666a2627eb8a56ab67616d00001e02dbe9c4609ec382dcc0391e62",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d00001e023a2d2b9621ef645380c63c16ab67616d00001e02ba4c798ab356b8adb64bb2fcab67616d00001e02ba6132f887666a2627eb8a56ab67616d00001e02dbe9c4609ec382dcc0391e62",
          width: 60,
        },
      ],
      name: "Dance I Said",
      owner: {
        display_name: "Michelle Kadir",
        external_urls: {
          spotify: "https://open.spotify.com/user/michellekadir",
        },
        href: "https://api.spotify.com/v1/users/michellekadir",
        id: "michellekadir",
        type: "user",
        uri: "spotify:user:michellekadir",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAACj+vJmuuu9qF+sfuRAF4/DobgjK9A",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/47s8Pj6MjV5UWYEaHIe9ZH/tracks",
        total: 106,
      },
      type: "playlist",
      uri: "spotify:playlist:47s8Pj6MjV5UWYEaHIe9ZH",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/13XT3kKAKOuhKV1IdgQxzf",
      },
      href: "https://api.spotify.com/v1/playlists/13XT3kKAKOuhKV1IdgQxzf",
      id: "13XT3kKAKOuhKV1IdgQxzf",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d00001e0242165edf668b41cb531722b0ab67616d00001e02599dfe976032830e5ec68945ab67616d00001e0297a9ac8888b636959cd8353cab67616d00001e029d2ff3fc2590549e13f17670",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d00001e0242165edf668b41cb531722b0ab67616d00001e02599dfe976032830e5ec68945ab67616d00001e0297a9ac8888b636959cd8353cab67616d00001e029d2ff3fc2590549e13f17670",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d00001e0242165edf668b41cb531722b0ab67616d00001e02599dfe976032830e5ec68945ab67616d00001e0297a9ac8888b636959cd8353cab67616d00001e029d2ff3fc2590549e13f17670",
          width: 60,
        },
      ],
      name: "Instrumental",
      owner: {
        display_name: "migo",
        external_urls: {
          spotify: "https://open.spotify.com/user/migo",
        },
        href: "https://api.spotify.com/v1/users/migo",
        id: "migo",
        type: "user",
        uri: "spotify:user:migo",
      },
      primary_color: null,
      public: true,
      snapshot_id: "AAAAWIMuC6bnXv1rYnZ7JKx21qOoOGOc",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/13XT3kKAKOuhKV1IdgQxzf/tracks",
        total: 56,
      },
      type: "playlist",
      uri: "spotify:playlist:13XT3kKAKOuhKV1IdgQxzf",
    },
  ],
};

app.get("/api/userPlaylists", (req, res, next) => {
  res.json(userPlaylists);
});

// PODCASTS

const userPodcasts = {
  items: [
    {
      audio_preview_url:
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      description:
        "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
      html_description:
        "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>",
      duration_ms: 1686230,
      explicit: false,
      external_urls: {
        spotify: "string",
      },
      href: "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      id: "5Xt5DXGzch68nYYamXrNxZ",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 300,
          width: 300,
        },
      ],
      is_externally_hosted: false,
      is_playable: false,
      language: "en",
      languages: ["fr", "en"],
      name: "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
      release_date: "1981-12-15",
      release_date_precision: "day",
      resume_point: {
        fully_played: false,
        resume_position_ms: 0,
      },
      type: "episode",
      uri: "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
      restrictions: {
        reason: "string",
      },
      show: {
        available_markets: ["string"],
        copyrights: [
          {
            text: "string",
            type: "string",
          },
        ],
        description: "string",
        html_description: "string",
        explicit: false,
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        is_externally_hosted: false,
        languages: ["string"],
        media_type: "string",
        name: "string",
        publisher: "string",
        type: "show",
        uri: "string",
        total_episodes: 0,
      },
    },
  ],
};

app.get("/api/userPodcasts", (req, res, next) => {
  res.json(userPodcasts);
});

const userArtists = {
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5aigDdW1JMwlIHdOgn8JG6",
      },
      followers: {
        href: null,
        total: 9591,
      },
      genres: ["halifax indie", "psych gaze"],
      href: "https://api.spotify.com/v1/artists/5aigDdW1JMwlIHdOgn8JG6",
      id: "5aigDdW1JMwlIHdOgn8JG6",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb1e4590a2e51c4f72a7476968",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051741e4590a2e51c4f72a7476968",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1781e4590a2e51c4f72a7476968",
          width: 160,
        },
      ],
      name: "The Everywheres",
      popularity: 43,
      type: "artist",
      uri: "spotify:artist:5aigDdW1JMwlIHdOgn8JG6",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1QAJqy2dA3ihHBFIHRphZj",
      },
      followers: {
        href: null,
        total: 13377275,
      },
      genres: ["ambient pop", "dream pop", "el paso indie", "shoegaze"],
      href: "https://api.spotify.com/v1/artists/1QAJqy2dA3ihHBFIHRphZj",
      id: "1QAJqy2dA3ihHBFIHRphZj",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb0e871e0389b9722cc12a4118",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051740e871e0389b9722cc12a4118",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1780e871e0389b9722cc12a4118",
          width: 160,
        },
      ],
      name: "Cigarettes After Sex",
      popularity: 86,
      type: "artist",
      uri: "spotify:artist:1QAJqy2dA3ihHBFIHRphZj",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5b5bt4mZQpJMoCRbiQ7diH",
      },
      followers: {
        href: null,
        total: 362228,
      },
      genres: ["australian indie rock"],
      href: "https://api.spotify.com/v1/artists/5b5bt4mZQpJMoCRbiQ7diH",
      id: "5b5bt4mZQpJMoCRbiQ7diH",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb080de26afb71545d9666e2a4",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174080de26afb71545d9666e2a4",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178080de26afb71545d9666e2a4",
          width: 160,
        },
      ],
      name: "Royel Otis",
      popularity: 73,
      type: "artist",
      uri: "spotify:artist:5b5bt4mZQpJMoCRbiQ7diH",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/20oT5LKCdO5vqCSgZ83OsQ",
      },
      followers: {
        href: null,
        total: 50211,
      },
      genres: ["lo-fi beats"],
      href: "https://api.spotify.com/v1/artists/20oT5LKCdO5vqCSgZ83OsQ",
      id: "20oT5LKCdO5vqCSgZ83OsQ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb6632941f18ac37e864199014",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051746632941f18ac37e864199014",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1786632941f18ac37e864199014",
          width: 160,
        },
      ],
      name: "Mayaewk",
      popularity: 45,
      type: "artist",
      uri: "spotify:artist:20oT5LKCdO5vqCSgZ83OsQ",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/73mSg0dykFyhvU96tb5xQV",
      },
      followers: {
        href: null,
        total: 557976,
      },
      genres: [],
      href: "https://api.spotify.com/v1/artists/73mSg0dykFyhvU96tb5xQV",
      id: "73mSg0dykFyhvU96tb5xQV",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb5211c31290a0d915d4ee2225",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051745211c31290a0d915d4ee2225",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1785211c31290a0d915d4ee2225",
          width: 160,
        },
      ],
      name: "Hermanos Gutiérrez",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:73mSg0dykFyhvU96tb5xQV",
    },
  ],
  total: 338,
  limit: 5,
  offset: 0,
  href: "https://api.spotify.com/v1/me/top/artists?limit=5&locale=fr,fr-FR;q%3D0.8,en-US;q%3D0.5,en;q%3D0.3",
  next: "https://api.spotify.com/v1/me/top/artists?offset=5&limit=5&locale=fr,fr-FR;q%3D0.8,en-US;q%3D0.5,en;q%3D0.3",
  previous: null,
};

app.get("/api/userArtists", (req, res, next) => {
  res.json(userArtists);
});

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
