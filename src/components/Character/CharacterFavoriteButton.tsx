import { Heart } from "lucide-react";
import { Button } from "../ui/button";

type FavoriteButtonProps = {
  isFavorite: boolean;
};

const CharacterFavoriteButton = (props: FavoriteButtonProps) => {
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => console.log("Clique")}
      >
        <Heart
          className={props.isFavorite ? "fill-red-400 text-red-400" : ""}
        />
      </Button>
    </div>
  );
};
export default CharacterFavoriteButton;
