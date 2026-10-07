"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};
export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  }, [pathName]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    router.push("/");
  }

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Produts",
      href: "/products",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Cart",
      href: "/cart",
    },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl"
        >
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
          {navLinks.map((link) => {
            const isActive =
              pathName === link.href ||
              (link.href !== "/" && pathName.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 ${
                  isActive
                    ? "font-semibold text-blue-600"
                    : "text-gray-950 hover:text-blue-600"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}

          {user ? (
            <>
              <Link
                href="/profile"
                className="font-semibold text-gray-900 hover:text-blue-600"
              >
                Hi, {user.name}
              </Link>

              <button
                onClick={handleLogout}
                className="shrink-0 rounded-lg bg-black px-3 py-1.5 text-white hover:bg-gray-800 sm:px-4 sm:py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="shrink-0 rounded-lg bg-black px-3 py-1.5 text-white hover:bg-gray-800 sm:px-4 sm:py-2"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="shrink-0 rounded-lg bg-black px-3 py-1.5 text-white hover:bg-gray-800 sm:px-4 sm:py-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
