"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type User = {
    id: string;
    name: string;
    email: string;
};

export default function ProfilePage() {
    const [user, setUser] = useState<User |null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if(savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if(!user) {
        return (
            <main className="min-h-screen bg-[#edf2eb] text-[#202820]">
                <section className="px-6 py-16 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
                            Your E-Shop account
                        </p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Your account, all in one place.
                        </h1>
                        <p className="mt-4 max-w-xl leading-7 text-[#536057]">
                            Sign in to see your profile details and continue exploring the shop.
                        </p>
                        <Link
                            href="/login"
                            className="mt-7 inline-flex min-h-11 items-center rounded-md bg-[#a7462d] px-5 font-semibold text-white transition-colors hover:bg-[#853722] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#853722]"
                        >
                            Sign in
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    const initial = user.name.trim().charAt(0).toUpperCase() || "U";

    return (
        <main className="min-h-screen bg-[#edf2eb] text-[#202820]">
            <section className="border-b border-[#d5ded4]">
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-10">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
                        Your E-Shop account
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        My profile
                    </h1>
                    <p className="mt-3 max-w-xl leading-7 text-[#536057]">
                        Your account details and a few good places to start browsing.
                    </p>
                </div>
            </section>

            <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
                <section
                    aria-labelledby="account-details-heading"
                    className="rounded-lg border border-[#d5ded4] bg-white p-6 shadow-sm sm:p-8"
                >
                    <div className="flex items-center gap-4 border-b border-[#e4e8e2] pb-6">
                        <div
                            aria-hidden="true"
                            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#a7462d] text-xl font-bold text-white"
                        >
                            {initial}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#68746a]">
                                Welcome back
                            </p>
                            <h2 className="mt-1 truncate text-xl font-bold text-[#202820] sm:text-2xl">
                                {user.name}
                            </h2>
                        </div>
                    </div>

                    <div className="pt-6">
                        <h3
                            id="account-details-heading"
                            className="text-lg font-bold text-[#202820]"
                        >
                            Account details
                        </h3>
                        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                            <div className="min-w-0">
                                <dt className="text-sm font-medium text-[#68746a]">
                                    Full name
                                </dt>
                                <dd className="mt-1 wrap-break-word font-semibold text-[#202820]">
                                    {user.name}
                                </dd>
                            </div>
                            <div className="min-w-0">
                                <dt className="text-sm font-medium text-[#68746a]">
                                    Email address
                                </dt>
                                <dd className="mt-1 break-all font-semibold text-[#202820]">
                                    {user.email}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <aside className="rounded-lg border border-[#d5ded4] bg-[#fafbf8] p-6 sm:p-8">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
                        The shop
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-[#202820]">
                        Find your next favorite
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#536057]">
                        Browse useful everyday picks, from audio to accessories.
                    </p>
                    <div className="mt-6 divide-y divide-[#e4e8e2] border-y border-[#e4e8e2]">
                        <Link
                            href="/products"
                            className="flex min-h-14 items-center justify-between gap-4 font-semibold text-[#34483a] transition-colors hover:text-[#a7462d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a7462d]"
                        >
                            Browse products <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex min-h-14 items-center justify-between gap-4 font-semibold text-[#34483a] transition-colors hover:text-[#a7462d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a7462d]"
                        >
                            Explore categories <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </aside>
            </div>
        </main>
    );
}