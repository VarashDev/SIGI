import { defineDb, defineTable, column } from 'astro:db';

const Record = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoincrement: true }),
    recorded: column.date(),
    reason: column.text(),
  }
})

const Reason = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoincrement: true }),
    name: column.text({unique: true}),
    order: column.number()
  }
})

export default defineDb({
  tables: { Record, Reason },
})



