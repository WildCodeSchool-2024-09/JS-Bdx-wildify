import { generateCodeChallenge } from "./codeChallenge";
import { codeVerifier } from "./codeVerifier";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scope =
  "user-read-private user-read-email user-top-read playlist-read-private user-library-read user-read-playback-position";

const requestUserAuthorization = async () => {
  window.localStorage.setItem("code_verifier", codeVerifier);

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  const params = {
    response_type: "code",
    client_id: clientId,
    client_secret: clientSecret,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

export { clientId, redirectUri, requestUserAuthorization, code, clientSecret };
