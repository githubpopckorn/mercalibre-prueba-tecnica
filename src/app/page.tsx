import { Background } from '@/components/Background'

export default function Home() {
  return (
    <main className='h-[calc(100vh-3rem)]'>
      <Background />
      <article className='flex flex-col justify-center items-center w-2/3 mx-auto h-2/4'>
        <h1 className='mt-16 text-6xl font-sans font-extrabold'>Mercalibre</h1>
        <p className='text-xl mt-6'>Aquí puedes encontrar todos los productos que desees! Empieza una búsqueda para encontrar tus productos.</p>
      </article>
    </main>
  )
}
