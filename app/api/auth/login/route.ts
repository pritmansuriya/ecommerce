import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "@/models/User";
import {connectDB} from "@/lib/db";

export async function POST(request: Request) {
    try {
        const {email, password} = await request.json();

        if(!email || !password) {
            return NextResponse.json(
                {
                    message: "Email and passwprd are requried",
                },
                {
                    status: 400,
                }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        await connectDB();

        const user = await User.findOne({ email: normalizedEmail }).collation({
            locale: "en",
            strength: 2,
        });

        if(!user) {
            return NextResponse.json(
                {
                    message: "Invalid email or password",
                },
                {
                    status: 401,
                }
            );
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!passwordMatch) {
            return NextResponse.json(
                {
                    message: "Invalid email or password",
                },
                {
                    status: 401,
                }
            );
        }

        const token = jwt.sign(
            {
                userId: user._id.toString(),
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        return NextResponse.json({
            message: "Login successful",

            token,

            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (error) {
        console.error("Login error:",error);

        return NextResponse.json(
            {
                message: "Login failed",
            },
            {
                status: 500,
            }
        );
    }
}

