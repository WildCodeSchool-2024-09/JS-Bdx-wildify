import { apiRequest } from "../api/apiClient";
import type { DisplayItem } from "../components/displayBlocks/types";

export const fetchData = async <T = DisplayItem[]>(
  url: string,
  transform?: (data: unknown) => T,
): Promise<T | null> => {
  try {
    const response = await apiRequest(url);
    const data: unknown = await response.json();

    if (transform) {
      return transform(data);
    }

    return data as T;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
};
