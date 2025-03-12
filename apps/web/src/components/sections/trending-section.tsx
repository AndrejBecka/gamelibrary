import { PUBLIC_ROUTES } from "~/routes/routes";
import { SectionHeader } from "../cards/section-header";
import { Carousel } from "../carousel/carousel";
import { api } from "~/trpc/server";

export async function TrendingSection() {
  const games = await api.game.listGames();
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Trending Now"
        hrefToViewAll={PUBLIC_ROUTES.TRENDING}
      />

      <div className="px-4">
        <Carousel items={games} />
      </div>
    </section>
  );
}
