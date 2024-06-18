import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    return NextResponse.json([
        {
            id:1, name:"MOSH"
        }
    ]);
}
export async function POST(request:NextRequest){
    const body = await request.json();
    const users = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            email:body.email
        }
    })
    return NextResponse.json(users) 
}