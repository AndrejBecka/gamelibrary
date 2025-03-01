import { trendingGames } from "~/data/mockup-data";
import { SectionHeader } from "../cards/section-header";
import { GameCard } from "../cards/card";
import { Carousel } from "../cards/carousel";

export function TrendingSection() {
  return (
    <section className="space-y-6">
      <SectionHeader title="Trending Now" viewAllLink="/trending" />

      <div className="px-4">
        <Carousel items={trendingGames} title="Trending Games" />
      </div>
    </section>
  );
}
