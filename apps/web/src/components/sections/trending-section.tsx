// import { trendingGames } from "~/data/mockup-data";
import { SectionHeader } from "../cards/section-header";
import { Carousel } from "../cards/carousel";
import { api } from "~/trpc/server";

export async function TrendingSection() {
  const games = await api.game.listGames();
  return (
    <section className="space-y-6">
      <SectionHeader title="Trending Now" viewAllLink="/trending" />

      <div className="px-4">
        <Carousel items={games} />
      </div>
    </section>
  );
}
