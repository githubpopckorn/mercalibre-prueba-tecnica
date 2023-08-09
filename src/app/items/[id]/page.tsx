import Api from "@/api/api"
import Link from "next/link"

export default async function ItemDetailPage({ params: { id } }: { params: { id: string } }) {
  const item = await Api.items.detail(id)


  const description = await Api.items.description(id)

  return (
    <main className="container lg:w-3/5 p-6 dark:bg-slate-800  bg-white shadow-lg mx-auto rounded mt-12">
      <article className="flex gap-4">
        <img src={item.pictures[0].url} alt={item.title} className="rounded w-[300px] h-[300px]" />
        <article className="flex flex-col gap-4">
          <p className="text-sm opacity-50">{item.seller_address?.city?.name} - {item.seller_address?.state?.name} </p>
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="text-4xl font-bold">{Number(item.price).toLocaleString('en-US', { style: 'currency', currency: item.currency_id })}</p>
          <Link href={item.permalink} className="bg-rose-500 text-white font-bold rounded-lg px-4 py-2">Comprar</Link>
        </article>
      </article>
      <article className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-bold">Descripción</h2>
        <p className="text-sm">{description.plain_text}</p>
      </article>

    </main>
  )
}