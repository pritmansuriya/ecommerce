"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");
        setSuccess("");

        if(password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if(!response.ok) {
                setError(data.message);
                return;
            }

            setSuccess("Regitraction successful!");

            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
        catch(error) {
            console.error(error);
            setError("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    } 

    return(
        <main className="flex min-h-screen items-center justify-center bg-[#edf2eb] px-4 py-10">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-[#202820] shadow-md">

                <h1 className="text-3xl font-bold text-[#202820]">
                    Create Account
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Create your E-Shop account
                </p>

                {error && (
                    <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-600">
                        {success}
                    </div>
                )}

                <form   
                    onSubmit={handleRegister}
                    className="mt-6 space-y-4"
                >
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

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

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled= {loading}
                        className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
                    >
                        {loading
                            ? "Creating Account..."
                            : "Register"
                        }
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}

                    <Link
                        href= "/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}