// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const artists = {
  results: [
    {
      id: 1,
      name: "Deadmau5",
      genres: ["big room", " dance pop", "edm", "pop", "progressive house"],
      picture:
        "https://i.scdn.co/image/ab6761610000f17889ffabe57a25cedeca3309e7",
    },
    {
      id: 2,
      name: "Pitbull",
      genres: ["dance pop", "miami hip hop", "pop"],
      picture:
        "https://i.scdn.co/image/ab6761610000f1784051627b19277613e0e62a34",
    },
    {
      id: 3,
      name: "Avicii",
      genres: ["big room", "dance pop", "edm", "pop", "progressive house"],
      picture:
        "https://i.scdn.co/image/ab6761610000f178ae07171f989fb39736674113",
    },
  ],
};

app.get("/api/artists", (req, res) => {
  res.json(artists);
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
