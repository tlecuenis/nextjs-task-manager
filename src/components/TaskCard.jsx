'use client'

import { useRouter } from "next/navigation"

export default function TaskCard({task}) {
    const router = useRouter()
    
    const handleClick = () => {
        router.push(`/tasks/edit/${task.id}`)
    }

    return(
        <li className='bg-slate-400 p-3 hover:bg-slate-500 hover:cursor-pointer' onClick={handleClick}>
            <h3 className='text-lg font-bold'>{task.title}</h3>
            <p>{task.description}</p>
            <small>{new Date(task.createdAt).toLocaleDateString()}</small>
        </li>
    )
};
