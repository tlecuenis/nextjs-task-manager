import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

//params tiene la ruta
export async function GET(request, {params}){

    const task = await prisma.task.findUnique({
        where:{
            id: Number(params.id)
        }
    })

    return NextResponse.json(task)
}

export async function PUT(request, {params}){

    const data = await request.json()

    const updatedTaks = await prisma.task.update(
        {
            where:{
                id: Number(params.id)
            },
            data:data
        })

    return NextResponse.json(updatedTaks)
}

export async function DELETE(request, {params}){

    try {
        const removedTask = await prisma.task.delete({
            where:{
                id: Number(params.id)
            }
        })
    
        return NextResponse.json(removedTask)
    } catch (error) {
        return NextResponse.json(error.message)
    }

   
}
