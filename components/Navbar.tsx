import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 sm:py-4">

                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">

                <Image
                    src="/Images/eshoplogo.jpg"
                    alt="E-Shop Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                />
                    <span>E-Shop</span> 
                </Link>

                <div className="flex w-full flex-wrap items-center justify-start gap-x-3 gap-y-2 text-sm text-gray-950 sm:w-auto sm:flex-nowrap sm:justify-between sm:gap-6 sm:text-base">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/products" className="hover:text-blue-600">
                        Products
                    </Link>

                    <Link href="/categories" className="hover:text-blue-600">
                        Categories
                    </Link>

                    <Link href="/cart" className="hover:text-blue-600">
                        Cart
                    </Link>

                    <Link href="/login" className="shrink-0 rounded-lg bg-black px-3 py-1.5 text-white sm:px-4 sm:py-2">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}