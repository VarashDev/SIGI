import { db, Record } from 'astro:db';


export default async function() {

  await db.insert(Record).values([
    { recorded:  new Date(), reason: 'Brake', userId: 'user_32dIPvUo9q3WTQn5pUk1fRCLuXf' },
    { recorded:  new Date(), reason: 'Good morning', userId: 'xxx' },
  ])

}