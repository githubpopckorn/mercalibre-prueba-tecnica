export default function Loading () {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full mt-16">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-rose-500"></div>
            <p className="text-rose-500 text-2xl font-bold mt-4">Cargando...</p>
        </div>

    )
}