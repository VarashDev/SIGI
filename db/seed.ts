import { db, Record, Reason } from 'astro:db';


export default async function() {

  await db.insert(Record).values([
    { recorded:  new Date(), reason: 'Brake' },
    { recorded:  new Date(), reason: 'Good morning' },
  ])

  await db.insert(Reason).values([
    { name: 'Good morning', order: 1 },
    { name:  'Brake', order: 2 },
    { name:  'After meal', order: 3 },
    { name:  'Emocional', order: 4 },
    { name:  'Good night', order: 5 },
    { name:  'Other', order: 6 },
  ])
}