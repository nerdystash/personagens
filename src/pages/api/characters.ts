import type { APIRoute } from "astro";
import { Character, db, eq } from "astro:db";

export const POST = (async ({ request }) => {
  const attributes = await request.json();

  const newCharacter = {
    name: attributes.name,
    description: attributes.description,
    show: attributes.show,
    creators: attributes.creators,
    imageUrl: attributes.imageUrl,
    isFavorite: false,
  };

  await db.insert(Character).values(newCharacter);

  return new Response(
    JSON.stringify({
      character: newCharacter,
    }),
  );
}) satisfies APIRoute;

export const GET = (async () => {
  const characters = await db.select().from(Character);

  return new Response(
    JSON.stringify({
      characters: characters,
    }),
  );
}) satisfies APIRoute;

export const PUT = (async ({ request }) => {
  const { id, isFavorite } = await request.json();

  const character = await db
    .select()
    .from(Character)
    .where(eq(Character.id, id));

  const updateCharacter = await db
    .update(Character)
    .set({ ...character, isFavorite: isFavorite });

  return new Response(JSON.stringify(updateCharacter));
}) satisfies APIRoute;
