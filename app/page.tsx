import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Wireless Headphones",
    category: "Audio",
    price: "$2,999",
    image: "/Images/headphone.jpg",
    alt: "Wireless headphones",
  },
  {
    name: "Smart Watch",
    category: "Wearables",
    price: "$4,999",
    image: "/Images/smart watch.jpg",
    alt: "Smart watch",
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: "$3,499",
    image: "/Images/running shoes.jpg",
    alt: "Running shoes",
  },
  {
    name: "Everyday Backpack",
    category: "Accessories",
    price: "$1,999",
    image: "/Images/backpack.jpg",
    alt: "Everyday backpack",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#202820]">
      <section className="bg-[#edf2eb]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#a54a32]">
              Good things, thoughtfully picked
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#202820] sm:text-6xl">
              Find your next everyday favorite.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#536057] sm:text-lg">
              Useful essentials, considered details, and little upgrades that
              make the day better. Your next great find is waiting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#a7462d] px-6 font-semibold text-white transition-colors hover:bg-[#853722] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#853722]"
              >
                Shop all products
              </Link>
              <Link
                href="#featured"
                className="font-semibold text-[#34483a] underline decoration-[#9bad9c] underline-offset-4 hover:text-[#a7462d]"
              >
                Explore the edit
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-[#d5ded4] pt-5 text-sm font-medium text-[#536057]">
              <span>Carefully selected</span>
              <span>Made for everyday</span>
              <span>Easy to love</span>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl bg-[#dce6db]">
            <Image
              src="/Images/headphone.jpg"
              alt="Wireless headphones from the E-Shop collection"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-5 sm:p-8"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-white/95 px-4 py-3 shadow-sm sm:bottom-6 sm:left-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#68746a]">
                This week&apos;s pick
              </p>
              <p className="mt-1 font-bold text-[#202820]">Sound, reimagined</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
              Browse the collection
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#202820] sm:text-3xl">
              A little something for every day
            </h2>
          </div>
          <Link
            href="/products"
            className="font-semibold text-[#34483a] underline decoration-[#9bad9c] underline-offset-4 hover:text-[#a7462d]"
          >
            All products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {products.map((product) => (
            <Link
              href="/products"
              key={product.category}
              className="group flex min-w-0 items-center gap-3 border-y border-[#e4e8e2] py-3 sm:gap-4 sm:border-b-0 sm:border-t-2 sm:py-5"
            >
              <span className="relative size-14 shrink-0 overflow-hidden rounded-md bg-[#f1f3ef] sm:size-16">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain p-1 transition-transform group-hover:scale-105"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold text-[#202820] group-hover:text-[#a7462d]">
                  {product.category}
                </span>
                <span className="mt-1 block text-sm text-[#68746a]">
                  Shop now <span aria-hidden="true">-&gt;</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="border-t border-[#edf0eb] bg-[#fafbf8]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#a54a32]">
                The E-Shop edit
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#202820] sm:text-3xl">
                Things worth making room for
              </h2>
            </div>
            <Link
              href="/products"
              className="font-semibold text-[#34483a] underline decoration-[#9bad9c] underline-offset-4 hover:text-[#a7462d]"
            >
              View all products
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <Link href="/products" key={product.name} className="group min-w-0">
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
                <div className="mt-1 flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-[#202820] group-hover:text-[#a7462d]">
                    {product.name}
                  </h3>
                  <p className="shrink-0 font-semibold text-[#34483a]">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}