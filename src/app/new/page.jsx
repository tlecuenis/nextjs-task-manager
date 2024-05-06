"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NewPage({params}) {

    const router = useRouter()

    const [data, setData] = useState({title: '', description: ''})

    useEffect(() => {
        if(params.id){
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        }
    },[])

    const handleSumbit = async (e) =>{
        e.preventDefault()

        if(params.id){
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({title: data.title, description: data.description}),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            // const data = await res.json()
            const info = await res.json()
            router.refresh()
            router.push("/")
        }else{
            console.log(data)
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({title: data.title, description: data.description}),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            // const data = await res.json()
            const info = await res.json()
            router.push("/")
        }
        
       
    }

    const handleChange = (name) => {
        console.log(data)
        return (e) => {
            setData({...data, [name]: e.target.value})
        }
    }

    const handleClick = async () => {
        const res = await fetch(`/api/tasks/${params.id}`, {
            method: 'DELETE'
        })
        const info = await res.json()
        router.refresh()
        router.push("/")
    }

    return(
        <div className="flex flex-col mt-8 p-8">
            <h2 className="font-bold text-2xl mx-auto">{params.id ? 'Editar tarea' : 'Nueva tarea'}</h2>
            <form onSubmit={handleSumbit} className="bg-slate-700 p-10 mx-auto rounded-md flex flex-col gap-y-3 w-full sm:w-96">
                <label htmlFor="title" className="text-white font-bold">Título</label>
                <input type="text" id="title" placeholder="Añada un título" className="rounded-sm p-1" value={data?.title} onChange={handleChange('title')}/>
                <label htmlFor="description" className="text-white font-bold">Descripción</label>
                <textarea name="" id="description" placeholder="Añada una descripción" className="rounded-sm p-1" value={data?.description} onChange={handleChange('description')}></textarea>
                <div className="flex justify-between">
                    <button className="bg-sky-500 hover:bg-sky-600 px-2 py-1 w-fit rounded-sm" type="submit">{params.id ? 'Guardar' : 'Crear'}</button>
                    {params.id && <button onClick={handleClick} className="bg-red-500 hover:bg-red-600 px-2 py-1 w-fit rounded-sm" type="button">Delete</button>}
                </div>
            </form>
        </div>
    )
};
