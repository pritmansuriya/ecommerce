import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Audio",
        price: 2999,
        image: "/Images/headphone.jpg",
        alt: "Wireless headphones",
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Wearables",
        price: 4999,
        image: "/Images/smart watch.jpg",
        alt: "Smart watch",
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        price: 3499,
        image: "/Images/running shoes.jpg",
        alt: "Running shoes",
    },
    {
        id: 4,
        name: "Everyday Backpack",
        category: "Accessories",
        price: 1999,
        image: "/Images/backpack.jpg",
        alt: "Everyday backpack",
    },
];

export default function ProductPage() {
    return (
        <main className="bg-white text-[#202820]">
            <section className="bg-[#edf2eb]">
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-10">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
                        The E-Shop collection
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#202820] sm:text-5xl">
                        Find your next favorite.
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#536057] sm:text-lg">
                        Explore useful essentials and everyday upgrades, carefully
                        picked for you.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-10">
                <div className="mb-7 flex items-end justify-between gap-4 border-b border-[#e4e8e2] pb-4">
                    <h2 className="text-xl font-bold text-[#202820] sm:text-2xl">
                        All products
                    </h2>
                    <p className="text-sm text-[#68746a]">
                        {products.length} items
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
                    {products.map((product) => (
                        <article key={product.id} className="group min-w-0">
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f0f2ee]">
                                <Image
                                    src={product.image}
                                    alt={product.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105 sm:p-5"
                                />
                            </div>
                            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#788279]">
                                {product.category}
                            </p>
                            <h2 className="mt-1 truncate font-semibold text-[#202820]">
                                {product.name}
                            </h2>
                            <p className="mt-2 font-semibold text-[#a7462d]">
                                ${product.price.toLocaleString("en-US")}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}