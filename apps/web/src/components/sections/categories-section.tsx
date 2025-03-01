import { categories } from "~/data/mockup-data";
import { SectionHeader } from "../cards/section-header";
import { CategoryCard } from "../cards/category-card";


export function CategoriesSection() {
    return(
        <section className="mb-16">
            <SectionHeader title="Browse by Category" viewAllLink="/categories" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 rounded-md">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    )
}