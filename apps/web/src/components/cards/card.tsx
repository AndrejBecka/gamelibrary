import Image from "next/image";
import { Star, ShoppingCart, Plus, ThumbsUp } from "lucide-react";
import { type Game } from "@prisma/client";
import { format } from "date-fns";

interface GameCardProps {
  game: Game;
  className?: string;
}

export function GameCard({ game, className = "" }: GameCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${className}`}
    >
      <div className="aspect-[3/4] rounded-lg">
        <Image
          src={game.coverImage || "/placeholder.svg"}
          alt={game.title}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {!!game.discount && (
        <div className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
          `{game.discount}%`
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h3 className="line-clamp-2 text-lg font-bold text-white">
          {game.title}
        </h3>
        {!!game.rating && (
          <div className="mt-1 flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm text-white">{game.rating}</span>
          </div>
        )}
        <div className="mt-2 flex items-center gap-2">
          <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
            <Plus className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
            <ThumbsUp className="h-4 w-4" />
          </button>
        </div>
        {game.price && (
          <div className="mt-2">
            <span className="font-medium text-white">${game.price}</span>
          </div>
        )}
        {game.releaseDate && (
          <p className="text-sm text-gray-300">
            {format(game.releaseDate, "dd MMMM yyyy")}
          </p>
        )}
      </div>
    </div>
  );
}
