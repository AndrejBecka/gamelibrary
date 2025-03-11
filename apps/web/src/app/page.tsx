import { api, HydrateClient } from "~/trpc/server";
import { PublicHeaderNavigation } from "~/components/navigation/navigation";
import { CategoriesSection } from "~/components/sections/categories-section";
import { TrendingSection } from "~/components/sections/trending-section";
import { SpecialOffers } from "~/components/sections/special-offers-section";
import { Footer } from "~/components/footer/footer";

export default async function Home() {
  void api.game.listGames.prefetch();
  void api.category.listCategories.prefetch();
  void api.specialOffer.listSpecialOffers.prefetch();

  return (
    <HydrateClient>
      <PublicHeaderNavigation />
      <div className="min-h-screen">
        <div className="container mx-auto mt-12 space-y-16 px-4 py-12">
          <TrendingSection />
          <CategoriesSection />
          <SpecialOffers />
        </div>
        <Footer />
      </div>
    </HydrateClient>
  );
}
