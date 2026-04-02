import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

type FavoriteButtonProps = {
  id: number;
  isFavorite: boolean;
};

const CharacterFavoriteButton = (props: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const toggleFavoriteStatus = async () => {
    const response = await fetch(`/api/characters`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
        isFavorite: !isFavorite,
      }),
    });

    if (response.ok) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggleFavoriteStatus}>
        <Heart className={isFavorite ? "fill-red-400 text-red-400" : ""} />
      </Button>
    </div>
  );
};
export default CharacterFavoriteButton;
