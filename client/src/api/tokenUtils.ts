import { clientId, clientSecret } from "../services/Auth/userAuth";

export const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token") || "";

  if (!refreshToken) {
    console.error("Aucun refresh_token trouvé dans localStorage !");
    return;
  }
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  };

  const response = await fetch(url, payload);
  const data = await response.json();

  if (!response.ok) {
    console.error("Erreur lors du rafraîchissement du token :", data);
    return;
  }

  if (!data.access_token) {
    console.error(
      "Erreur : aucun access_token dans la réponse du rafraîchissement !",
    );
    return;
  }

  if (typeof data.expires_in !== "number") {
    console.error("Erreur : expires_in est invalide !");
    return;
  }

  localStorage.setItem("access_token", data.access_token);
  if (data.refresh_token) {
    localStorage.setItem("refresh_token", data.refresh_token);
  }

  const expiresAT = Date.now() + data.expires_in * 1000;
  localStorage.setItem("expires_at", expiresAT.toString());
};

export const isTokenExpired = () => {
  const expiresAT = localStorage.getItem("expires_at");
  return !expiresAT || Date.now() > Number.parseInt(expiresAT);
};
export const checkRefreshToken = async () => {
  if (isTokenExpired()) {
    await getRefreshToken();
  }
};
