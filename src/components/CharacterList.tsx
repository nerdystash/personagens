import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const chamada = await fetch("/api/characters");
      const data = await chamada.json();
      setCharacters(data.characters);
    };
    fechData()
  }, [setCharacters]);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
      {characters.map((character: any) => {
        return (
          <ListItem
            title={character.name}
            description={character.description}
            imageUrl={character.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
