import { specialOffers } from "~/data/mockup-data";
import { SectionHeader } from "../cards/section-header";
import Image from "next/image";
import { cn } from "~/lib/utils";

export function SpecialOffers() {
  return (
    <section className="mb-16">
      <SectionHeader title="Special Offers" viewAllLink="/specialOffers" />
      <div className="grid grid-cols-1 gap-4 rounded-xl md:grid-cols-2 md:gap-6">
        {specialOffers.map((offer) => (
          <div
            key={offer.id}
            className="relative aspect-auto overflow-hidden rounded-xl bg-white"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={800}
              height={400}
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent p-8">
              <h3
                className={`mb-2 font-bold text-white ${offer.pixelArt === true ? "font-vt323 text-4xl" : "text-3xl"}`}
              >
                {offer.title}
              </h3>
              <p
                className={`mb-4 text-gray-400 ${offer.pixelArt === true ? "font-vt323" : ""}`}
              >
                {offer.description}
              </p>
              <button
                className={cn(
                  `w-fit rounded-2xl border-2 border-white px-6 py-3 font-medium text-white backdrop-blur-sm transition-transform duration-200 hover:scale-110`,
                  { ["font-vt323"]: offer.pixelArt },
                )}
              >
                <span className="animate-gradient-text bg-white bg-clip-text text-transparent">
                  {offer.buttonText}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
