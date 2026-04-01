import { Heart } from "lucide-react";
import { Button } from "../ui/button";

type FavoriteButtonProps = {
  isFavorite: boolean;
};

const CharacterFavoriteButton = (props: FavoriteButtonProps) => {
  const toggleFavoriteStatus = async () => {
    const id = "1";

    const response = await fetch(`/api/characters`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        isFavorite: true,
      }),
    });

    if (response.ok) {
      window.location.href = "/characters/success";
    }
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggleFavoriteStatus}>
        <Heart
          className={props.isFavorite ? "fill-red-400 text-red-400" : ""}
        />
      </Button>
    </div>
  );
};
export default CharacterFavoriteButton;
