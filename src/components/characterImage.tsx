import {Card} from "./ui/card";

type CharacterImageProps = {
    imageUrl: string
}

const CharacterImage = ({imageUrl}: CharacterImageProps) => {
    return <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={imageUrl}
        className="relative z-20 w-full object-cover"
      />
    </Card>
}

export default CharacterImage;