import { Card, CardHeader, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type ListItemProps = {
    title: string, 
    description: string, 
    imageUrl: string
}

const ListItem = ({title, description, imageUrl}: ListItemProps) => {
    return <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={imageUrl}
        alt={title}
        className="relative z-20 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Ver mais</Button>
      </CardFooter>
    </Card>
}

export default ListItem;