import type React from "react";
import { type ReactNode, createContext, useContext, useState } from "react";
import { apiRequest, checkRefreshToken } from "../api/apiClient";

type SearchResults = {
  artists?: {
    items: Array<{
      id: string;
      name: string;
      images: Array<{ url: string }>;
      genres: string[];
    }>;
  };
  albums?: {
    items: Array<{
      id: string;
      name: string;
      images: Array<{ url: string }>;
      release_date: string;
    }>;
  };
  shows?: {
    items: Array<{
      id: string;
      name: string;
      album: {
        id: string;
        name: string;
        images: Array<{ url: string }>;
      };
      artists: Array<{ id: string; name: string }>;
    }>;
  };
};

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: SearchResults | null;
  performSearch: () => Promise<void>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null,
  );

  const performSearch = async () => {
    if (!searchTerm) {
      console.warn("Le champ de recherche est vide !");
      return;
    }

    try {
      await checkRefreshToken();

      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error(
          "Aucun access_token disponible après le rafraichissement !",
        );
        return;
      }

      const endpoint = `/search?q=${encodeURIComponent(searchTerm)}&type=artist,album,episode&limit=10`;
      const response = await apiRequest(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data: SearchResults = await response.json();

      setSearchResults(data);
    } catch (error) {
      console.error("Erreur lors de la recherche Spotify :", error);
    }
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchResults, performSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch doit être utilisé dans un SearchProvider");
  }
  return context;
};
