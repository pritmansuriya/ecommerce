import Link from "next/link";

type CategoryCardProps = {
    name: string;
    image: string,
    slug: string;
};

export default function CategoryCard({
    name,
    image,
    slug
}: CategoryCardProps) {
    return(
        <Link 
            href={`/products?category=${slug}`}
            className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:translate-y-1 hover:shadow-sm"
        >
            <div className="h-48 overflow-hidden">
                <img 
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                    {name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Shop Now →
                </p>
            </div>
        </Link>
    );
}    