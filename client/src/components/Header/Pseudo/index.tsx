import "./Pseudo.css";

export interface PseudoProps {
  display_name: string;
  image: string;
}

interface PseudoComponentProps {
  pseudoData: PseudoProps | null;
}

export default function Pseudo({ pseudoData }: PseudoComponentProps) {
  return pseudoData ? (
    <figure className="pseudo">
      <img
        src={pseudoData.image}
        alt="profile_picture"
        height={64}
        width={64}
      />
      <figcaption>{pseudoData.display_name}</figcaption>
    </figure>
  ) : (
    <p>Loading...</p>
  );
}
