import { api, HydrateClient } from "~/trpc/server";
import NavigationMenu from "~/components/navigation/navigation";
import { CategoriesSection } from "~/components/sections/categories-section";
import { TrendingSection } from "~/components/sections/trending-section";
import { SpecialOffers } from "~/components/sections/special-offers-section";
import { Footer } from "~/components/footer";

export default async function Home() {
  void api.game.getLatest.prefetch();

  return (
    <HydrateClient>
      <NavigationMenu />
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
