"use client"

import { useRouter } from "next/navigation"

export default function NewPage() {

    const router = useRouter()

    const handleSumbit = async (e) =>{
        e.preventDefault()
        
        const title = e.target.title.value
        const description = e.target.description.value

        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        router.push("/")
    }
    return(
        <div className="flex flex-col mt-8 p-8">
            <h2 className="font-bold text-2xl mx-auto">Nueva tarea</h2>
            <form onSubmit={handleSumbit} className="bg-slate-700 p-10 mx-auto rounded-md flex flex-col gap-y-3 w-full sm:w-96">
                <label htmlFor="title">Título</label>
                <input type="text" id="title" placeholder="Añada un título" className="rounded-sm p-1 "/>
                <label htmlFor="description">Descripción</label>
                <textarea name="" id="description" placeholder="Añada una descripción" className="rounded-sm p-1"></textarea>

                <button className="bg-sky-500 w-16 rounded-sm">Crear</button>
            </form>
        </div>
    )
};
