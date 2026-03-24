import {Card} from "./ui/card";

type ImagemPersonagemProps = {
    imageUrl: string
}

const ImagemPersonagem = ({imageUrl}: ImagemPersonagemProps) => {
    return <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={imageUrl}
        className="relative z-20 w-full object-cover"
      />
    </Card>
}

export default ImagemPersonagem;