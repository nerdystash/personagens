type DescricaoProps = {
  nome: string;
  descricao: string;
  serie: string;
  criador: string;
};

const CharacterDescription = ({
  nome,
  descricao,
  serie,
  criador,
}: DescricaoProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg max-w-md ">
      <h1 className="font-bold mb-4 text-lg">{nome}</h1>
      <h3 className="mb-3"> Descrição: {descricao}</h3>
      <h3 className="mb-3"> Série: {serie}</h3>
      <h3 className="mb-3"> Criador(es): {criador}</h3>
    </div>
  );
};

export default CharacterDescription;
