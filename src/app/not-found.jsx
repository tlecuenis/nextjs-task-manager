import Link from "next/link"

export default function NotFound(){
    return(
        <section className="flex flex-col h-[calc(100vh-7rem)] justify-center items-center mx-auto">
            <h1 className="text-3xl font-bold">Not Found</h1>
            <Link href="/">Volver al inicio</Link>
        </section>
    )
}