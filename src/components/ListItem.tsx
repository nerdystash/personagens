import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import FavoriteButton from "./FavoriteButton";

type ListItemProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const ListItem = ({ title, description, imageUrl }: ListItemProps) => {
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
        <FavoriteButton />
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

export default ListItem;
