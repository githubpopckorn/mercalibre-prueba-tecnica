'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Header() {
    const [search, setSearch] = useState('')
    const searchParams = useSearchParams()

    useEffect(() => {
        setSearch(searchParams.get('search') || '')
    }, [searchParams])

    return (
        <header className=" flex gap-x-4 px-4 justify-center items-center
        bg-rose-500 text-slate-900 h-12 rounded font-sans">
            <Link href="/">
                <h1 className="text-white font-extrabold text-2xl">Mercalibre</h1></Link>
            <form action="/items" className="flex-1 font-bold">
                <input type="text" name="search" id="search" placeholder="Buscar productos, marcas y más..."
                    className="rounded-l px-2 py-1 bg-white text-slate-900 placeholder-slate-900 w-4/5
                    focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                    value={search} onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="rounded-r px-2 py-1 bg-white text-slate-900 font-bold">
                    Buscar
                </button>
            </form>
        </header>
    )
}