import { defineDb, defineTable, column } from 'astro:db';

const Record = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoincrement: true }),
    recorded: column.date(),
    reason: column.text(),
  }
})

export default defineDb({
  tables: { Record },
})



