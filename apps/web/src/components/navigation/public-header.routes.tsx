import { Bell, type LucideIcon, Search, ShoppingCart } from "lucide-react";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "~/routes/routes";

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export const PUBLIC_HEADER_ROUTES: NavItem[] = [
  {
    title: "Home",
    href: PUBLIC_ROUTES.HOME,
  },
  {
    title: "Browse",
    href: PUBLIC_ROUTES.BROWSE,
  },
  {
    title: "Categories",
    href: PUBLIC_ROUTES.CATEGORIES,
  },
];

export const PRIVATE_HEADER_ROUTES: NavItem[] = [
  {
    title: "My Library",
    href: PRIVATE_ROUTES.MY_LIBRARY,
  },
];

export const SEARCH_ROUTE: NavItem = {
  title: "Search",
  href: PUBLIC_ROUTES.SEARCH,
  icon: Search,
};

export const CART_ROUTE: NavItem = {
  title: "Cart",
  href: PUBLIC_ROUTES.CART,
  icon: ShoppingCart,
};

export const PUBLIC_RIGHT_SIDE_ACTIONS: NavItem[] = [SEARCH_ROUTE, CART_ROUTE];

export const NOTIFICATIONS_ITEM: NavItem = {
  title: "Notifications",
  href: PRIVATE_ROUTES.NOTIFICATIONS,
  icon: Bell,
};
