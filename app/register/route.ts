import { NextRequest, NextResponse } from "next/server";
import { error } from "console";
import bcrypt from "bcrypt";
import { Prisma, PrismaClient } from "@prisma/client"
const prisma  = new PrismaClient();
export async function POST(request: NextRequest) {
    const body = await request.json();
    const uniqueUser = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if (uniqueUser) {
        return NextResponse.json({ error: "email already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: hashedPassword
        }
    })
    return NextResponse.json({ email: body.email })
}