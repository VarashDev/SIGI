import { db, Record, Reason } from 'astro:db';


export default async function() {

  await db.insert(Record).values([
    { recorded:  new Date(), reason: 'Brake' },
    { recorded:  new Date(), reason: 'Good morning' },
  ])

}