import { Heart } from "lucide-react";
import { Button } from "./ui/button";

const FavoriteButton = () => {
  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => console.log("Clique")}>
        <Heart />
      </Button>
    </div>
  );
};
export default FavoriteButton;
