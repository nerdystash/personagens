import { Character, db } from "astro:db";

export default async function seed() {
  const characterMabel = {
    name: "Mabel Pines",
    description: `Mabel é uma menina de 12 anos de idade, energética (ela e seu irmão completam 13 no final do final da série) que com seu irmão vão passar suas férias de verão na armadilha para turistas de seu tio-avô, chamada de "Cabana do Mistério".`,
    show: "Gravity Falls",
    creators: "Alex Hirsch",
    imageUrl:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Mabel-Pines.Gravity-Falls.webp",
  };

  const characterDipper = {
    name: "Dipper Pines",
    description: `Dipper é um rapaz de 12 anos de idade (13 anos de idade no final da série) que, juntamente com sua irmã gêmea Mabel, é enviado para passar suas férias de verão na armadilha turística de seu tio-avô chamada Cabana do Mistério. Ele se esforça para descobrir os segredos da cidade ficcional de Gravity Falls e dar explicações para situações estranhas após encontrar um livro catalogando anomalias monstruosas em Gravity Falls.`,
    show: "Gravity Falls",
    creators: "Alex Hirsch",
    imageUrl:
      "https://static.wikia.nocookie.net/gravityfalls/images/0/08/S1e3_dipper's_keen_powers_of_observation.png/revision/latest?cb=20240514023236",
  };

  await db.insert(Character).values(characterMabel);
  await db.insert(Character).values(characterDipper);
}
