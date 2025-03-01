import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    image: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-video overflow-hidden rounded-xl">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <h3 className="text-white font-bold text-lg">{category.name}</h3>
      </div>
    </Link>
  )
}

