import { column, defineDb, defineTable } from "astro:db";

const Character = defineTable({
  columns: {
    creators: column.text(),
    description: column.text(),
    imageUrl: column.text(),
    name: column.text(),
    show: column.text(),
    isFavorite: column.boolean(),
  },
});

export default defineDb({
  tables: { Character },
});
