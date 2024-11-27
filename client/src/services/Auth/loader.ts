import getToken from "./getToken";
import { code, requestUserAuthorization } from "./userAuth";

export async function authLoader() {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    return null;
  }
  if (code) {
    try {
      await getToken(code as string);
      return null;
    } catch (error) {
      console.error("Erreur lors de la récupération du token :", error);
      return null;
    }
  }

  requestUserAuthorization();
  return null;
}
