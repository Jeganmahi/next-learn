
import prisma from "@/prisma/client";
import { NextRequest,NextResponse } from "next/server";
export async function PUT(request:NextRequest){
        const body = await request.json();
        const data = await prisma.products.create({
           data:{
            name:body.name,
            price:parseInt(body.price)
           }
        })
        const datas = await prisma.products.findMany();
        return NextResponse.json(datas)
    
}