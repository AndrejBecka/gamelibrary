import { SectionHeader } from "../cards/section-header";
import { CategoryCard } from "../cards/category-card";
import { api } from "~/trpc/server";
import { PUBLIC_ROUTES } from "~/routes/routes";

export async function CategoriesSection() {
  const categories = await api.category.listCategories();
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Browse by Category"
        hrefToViewAll={PUBLIC_ROUTES.CATEGORIES}
      />
      <div className="grid grid-cols-2 gap-4 rounded-md md:grid-cols-3 md:gap-6 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
