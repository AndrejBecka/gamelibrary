import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  showViewAll?: boolean;
}

export function SectionHeader({
  title,
  viewAllLink = "#",
  showViewAll = true,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-6">
      <h2 className="ml-2 bg-clip-text text-2xl font-bold text-transparent text-white">
        {title}
      </h2>
      {showViewAll && (
        <Link
          href={viewAllLink}
          className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          // className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-sm text-transparent"
        >
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
