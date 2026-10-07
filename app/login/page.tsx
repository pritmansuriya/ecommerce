"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if(!response.ok) {
                setError(data.message);
                return;
            }

            localStorage.setItem("token", data.token)

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            router.push("/");
        }
        catch(error) {
            console.error(error);
            setError("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#edf2eb] px-4 py-10">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-[#202820] shadow-md">

                <h1 className="text-2xl font-bold text-[#202820]">
                    Welcome Back
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Login to your E-Shop accout
                </p>

                {error && (
                    <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <form 
                    onSubmit={handleLogin}
                    className="mt-6 space-y-4"
                >

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input 
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input 
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled= {loading}
                        className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
                    >
                        {
                            loading
                                ? "Logging in..."
                                : "Login"
                        }
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{" "}

                    <Link
                        href="/register"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
}