import { db } from '../lib/db'

export default async function Home() {

  await db.set('Si', '1')

  return <div className='text-red-500'>Hola mundo</div>
}