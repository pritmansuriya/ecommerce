import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import {connectDB} from "@/lib/db";

export async function POST(request: Request) {
    try {
        const {name, email, password} = await request.json();

        if(!name || !email || !password) {
            return NextResponse.json(
                {
                    messae: "All fields are requried",
                },
                {
                    status: 400,
                }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        await connectDB();

        const existingUser = await User.findOne({ email: normalizedEmail }).collation({
            locale: "en",
            strength: 2,
        });

        if(existingUser) {
            return NextResponse.json(
                {
                    message: "User already exists",
                },
                {
                    status: 400,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword,
        });

        return NextResponse.json(
            {
                message: "Registraction successful",
                user: {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                },
            },
            {
                status: 201,
            }
        );
    }
    catch(error) {
        console.error("Register error:", error);

        return NextResponse.json(
            {
                message: "Registraction failed",
            },
            {
                status: 500,
            }
        )
    }
}