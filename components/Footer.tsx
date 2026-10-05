import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-[#d5ded4] bg-[#edf2eb] text-[#202820]">
            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    <div>
                        <h2 className="text-xl font-bold">
                            E-Shop
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Your trusted online shopping website.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Quick Links
                        </h3>

                        <div className="mt-3 flex flex-col gap-2">
                            <Link className="transition-colors hover:text-[#a7462d]" href="/">Home</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/products">Products</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/categories">Categories</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Account
                        </h3>

                        <div className="mt-3 flex flex-col gap-2">
                            <Link className="transition-colors hover:text-[#a7462d]" href="/login">Login</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/register">Register</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/profile">Profile</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Support
                        </h3>

                        <div className="mt-3 flex flex-col gap-2">
                            <Link className="transition-colors hover:text-[#a7462d]" href="/contact">Contact</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/privacy">Privacy</Link>
                            <Link className="transition-colors hover:text-[#a7462d]" href="/terms">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t pt-5 text-center text-gray-600">
                    @ 2026 E-Shop. All rights reserved.
                </div>
            </div>
        </footer>
    );
}