import { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListItem";
import { Field } from "../ui/field";
import { Input } from "../ui/input";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const chamada = await fetch("/api/characters");
      const data = await chamada.json();
      setCharacters(data.characters);
      setFilteredCharacters(data.characters);
    };
    fetchData();
  }, [setCharacters]);

  const filterCharacters = (event: any) => {
    const value = event.target.value;

    setSearch(value);

    if (value === "") {
      setFilteredCharacters(characters);
      return;
    }

    const filtered = characters.filter((character: any) => {
      return character.name === value;
    });

    setFilteredCharacters(filtered);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <Field>
          <Input
            className="bg-gray-50"
            placeholder="Pesquisa"
            onChange={filterCharacters}
          />
        </Field>
      </div>
      {filteredCharacters.length === 0 && (
        <div className="w-full text-center">
          <p>{`Nenhum resultado encontrado para o termo: ${search}`}</p>
        </div>
      )}
      {filteredCharacters.length > 0 && (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredCharacters.map((character: any) => {
            return (
              <CharacterListItem
                id={character.id}
                title={character.name}
                description={character.description}
                imageUrl={character.imageUrl}
                isFavorite={character.isFavorite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
