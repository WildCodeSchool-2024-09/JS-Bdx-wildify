import { clientId, redirectUri } from "./userAuth";

const getToken = async (code: string) => {
  const codeVerifier = localStorage.getItem("code_verifier");

  if (!codeVerifier) {
    throw new Error("Code verifier not found in localStorage");
  }

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    payload,
  );
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("access_token", data.access_token);
    if (data.refresh_token) {
      localStorage.setItem("refresh_token", data.refresh_token);
    }
    const expiresAT = Date.now() + data.expires_in * 1000;
    localStorage.setItem("expires_at", expiresAT.toString());
  } else {
    console.error("Error fetching token:", data);
  }
};

export default getToken;
