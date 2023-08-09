import Api from '@/api/api'
import Link from 'next/link'

export default async function ItemsPage({ searchParams }: { searchParams: { search: string } }) {
  const results = await Api.items.search(searchParams.search)

  return (
    <main className="container mx-auto mt-16 ">
      <ul className="grid grid-cols-1 gap-4">
        {results.map((item) => (
          <li key={item.id} className="">
            <Link href={`/items/${item.id}`} className=" flex gap-4 w-full dark:bg-slate-900 bg-white shadow-lg rounded-xl p-4">
              <img src={item.thumbnail} alt={item.title} width={150} height={150} className="rounded w-[150px] h-[150px]" />
              <article>
                <p className="dark:text-white font-bold">{item.title}</p>
                <p className="dark:text-white text-xl opacity-75">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: item.currency_id })}</p>
              </article>
              <span className="ml-auto text-sm opacity-50">{item.seller_address.city?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}