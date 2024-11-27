import { useEffect, useState } from "react";
import { apiRequest } from "../../../api/apiClient";
import Pseudo, { type PseudoProps } from "../Pseudo";

export default function PseudoDisplay() {
  const [pseudoData, setPseudoData] = useState<PseudoProps | null>(null);

  useEffect(() => {
    const fetchPseudo = async () => {
      try {
        const response = await apiRequest("/me");
        const data = await response.json();

        const pseudoDataFormatted: PseudoProps = {
          display_name: data.display_name,
          image: data.images[0]?.url || "../src/assets/pseudo/logo-logout.svg",
        };

        setPseudoData(pseudoDataFormatted);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchPseudo();
  }, []);
  return <Pseudo pseudoData={pseudoData} />;
}
