import { checkRefreshToken } from "./tokenUtils";

export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  await checkRefreshToken();

  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    console.error("Aucun access_token trouvé après le rafraîchissement !");
    throw new Error("Token non disponible");
  }
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const url = `${import.meta.env.VITE_API_SPOTIFY}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
    const response = await fetch(url, {
      ...options,
      headers,
    });
    if (!response.ok) {
      console.error(
        `Erreur lors de la requête : ${response.status} ${response.statusText}`,
      );
      throw new Error(`Erreur lors de la requête à ${endpoint}`);
    }

    return response;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    throw error;
  }
};
export { checkRefreshToken };
