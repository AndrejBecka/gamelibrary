import Image from "next/image"
import { Star, ShoppingCart, Plus, ThumbsUp } from "lucide-react"

interface GameCardProps {
  game: {
    id: string
    title: string
    coverImage: string
    rating?: number
    price?: string
    discount?: string
    hasDiscount?: boolean
    releaseDate?: string
  }
  className?: string
}

export function GameCard({ game, className = "" }: GameCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl transition-all duration-300 ${className}`}>
      <div className="aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={game.coverImage || "/placeholder.svg"}
          alt={game.title}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {game.hasDiscount && game.discount && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          {game.discount}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-lg line-clamp-2">{game.title}</h3>
        {game.rating && (
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm ml-1">{game.rating}</span>
          </div>
        )}
        <div className="mt-2 flex items-center gap-2">
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full">
            <Plus className="h-4 w-4" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full">
            <ThumbsUp className="h-4 w-4" />
          </button>
        </div>
        {game.price && (
          <div className="mt-2">
            <span className="text-white font-medium">{game.price}</span>
          </div>
        )}
        {game.releaseDate && <p className="text-gray-300 text-sm">{game.releaseDate}</p>}
      </div>
    </div>
  )
}

