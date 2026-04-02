import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CharacterFavoriteButton from "@/components/Character/CharacterFavoriteButton";

type ListItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  isFavorite: boolean;
  id: number;
};

const CharacterListItem = ({
  title,
  description,
  imageUrl,
  isFavorite,
  id,
}: ListItemProps) => {
  const showCharacter = () => {
    window.location.href = "/character-detail";
  };

  return (
    <Card className="relative mx-auto w-full pt-0">
      <img
        src={imageUrl}
        alt={title}
        className="relative z-20 w-full object-cover"
      />
      <CardHeader className="flex-1">
        <CharacterFavoriteButton id={id} isFavorite={isFavorite} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={showCharacter} className="w-full cursor-pointer">
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CharacterListItem;
