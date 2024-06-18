import { error } from "console";
import Schema from "../schema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
interface props{
    params:{id:number}
}
export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const users = await prisma.user.findMany({
        where:{
            id:parseInt(params.id)
        }
    })
    if(!users){
        return NextResponse.json({error:"invalid name"});
    }
    else{

        return NextResponse.json(users);
    }
}

export async function PUT(request:NextRequest,{params:{id}}:props){
    const body = await request.json();
    if(!body.name){
        return NextResponse.json({error:"invalid name"});
    }
    else{
        return NextResponse.json({name:"poda punda"})
    }
}
export async function DELETE(request:NextRequest,{params:{id}}:props){
    const body = await request.json();
    const safe = Schema.safeParse(body);
    if(!safe.success){
        return NextResponse.json({error:" name"});
    }
    else{
        return NextResponse.json({name : "successs"})
    }
}