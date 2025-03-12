import Link from "next/link";
import { type NavItem } from "./public-header.routes";

interface NavigationLinksProps {
  navigationItems: NavItem[];
}

export const NavigationLinks = ({ navigationItems }: NavigationLinksProps) => {
  return (
    <nav className="hidden space-x-8 md:flex">
      {navigationItems.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className="text-gray-300 opacity-90 transition-transform duration-200 hover:scale-110 hover:opacity-100"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
