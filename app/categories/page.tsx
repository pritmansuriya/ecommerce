import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Audio",
    image: "/Images/headphone.jpg",
  },
  {
    id: 2,
    name: "Wearables",
    image: "/Images/smart watch.jpg",
  },
  {
    id: 3,
    name: "Footwear",
    image: "/Images/running shoes.jpg",
  },
  {
    id: 4,
    name: "Accessories",
    image: "/Images/backpack.jpg",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#202820]">
      {/* Hero Section */}
      <section className="bg-[#edf2eb]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
            The E-Shop
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Shop by Category
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#536057] sm:text-lg">
            Explore our categories and find products that match your needs.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#68746a]">
            Explore
          </p>

          <h2 className="mt-2 text-2xl font-bold">Categories</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group overflow-hidden rounded-xl border border-[#e4e8e2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-square bg-[#f0f2ee]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>

                <p className="mt-1 text-sm text-[#68746a]">
                  Explore products →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
