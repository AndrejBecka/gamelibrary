import { type Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { PUBLIC_ROUTES } from "~/routes/routes";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`${PUBLIC_ROUTES.CATEGORIES}/${category.id}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-video overflow-hidden rounded-xl">
        <Image
          key={category.id}
          src={category.image ?? "/placeholder.svg"}
          alt={category.title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-lg font-bold text-white">{category.title}</h3>
      </div>
    </Link>
  );
}
