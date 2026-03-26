import type { APIRoute } from "astro";
import { Character, db } from "astro:db";

export const POST = (async ({ request }) => {
  const characterMock = {
    name: "Mabel Pines",
    description: `Mabel é uma menina de 12 anos de idade, energética (ela e seu irmão completam 13 no final do final da série) que com seu irmão vão passar suas férias de verão na armadilha para turistas de seu tio-avô, chamada de "Cabana do Mistério".`,
    show: "Gravity Falls",
    creators: "Alex Hirsch",
    imageUrl:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Mabel-Pines.Gravity-Falls.webp",
  };

  await db.insert(Character).values(characterMock);

  return new Response(
    JSON.stringify({
      character: characterMock,
    }),
  );
}) satisfies APIRoute;

export const GET = (({ params, request }) => {
  // TODO: listar os personagens cadastrados no banco de dados e retornar no response
  // https://docs.astro.build/en/guides/astro-db/
  // olhar o método .select

  return new Response(
    JSON.stringify({
      // Retornar os resultados aqui usando JSON.stringify, igual no post
      chracters: [],
    }),
  );
}) satisfies APIRoute;
