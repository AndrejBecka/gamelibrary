import { type SpecialOffer } from "@prisma/client";
import Image from "next/image";

interface offerCardProps {
  offer: SpecialOffer;
}

export function OfferCard({ offer }: offerCardProps) {
  return (
    <div
      key={offer.id}
      className="relative aspect-auto overflow-hidden rounded-xl bg-white"
    >
      <Image
        src={offer.coverImage}
        alt={offer.title}
        width={800}
        height={400}
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent p-8">
        <h3 className="mb-2 text-3xl font-bold text-white">{offer.title}</h3>
        <p className="mb-4 text-gray-400">{offer.description}</p>
        <button className="w-fit rounded-2xl border-2 border-white px-6 py-3 font-medium text-white backdrop-blur-sm transition-transform duration-200 hover:scale-110">
          <span className="animate-gradient-text bg-white bg-clip-text text-transparent">
            Shop Now
          </span>
        </button>
      </div>
    </div>
  );
}
