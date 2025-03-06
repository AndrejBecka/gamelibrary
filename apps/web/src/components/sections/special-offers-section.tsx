import { SectionHeader } from "../cards/section-header";
import { OfferCard } from "../cards/offer-card";
import { api } from "~/trpc/server";

export async function SpecialOffers() {
  const offers = await api.specialOffer.listSpecialOffers();
  return (
    <section>
      <SectionHeader title="Special Offers" viewAllLink="/specialOffers" />
      <div className="grid grid-cols-1 gap-4 rounded-xl md:grid-cols-2 md:gap-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
