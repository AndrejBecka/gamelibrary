import { Bell, type LucideIcon, Search, ShoppingCart } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export const PUBLIC_HEADER_ROUTES: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Browse",
    href: "/browse",
  },
  {
    title: "Categories",
    href: "/categories",
  },
];

export const PRIVATE_HEADER_ROUTES: NavItem[] = [
  {
    title: "My Library",
    href: "/my-library",
  },
];

export const SEARCH_ROUTE: NavItem = {
  title: "Search",
  href: "#",
  icon: Search,
};

export const CART_ROUTE: NavItem = {
  title: "Cart",
  href: "/cart",
  icon: ShoppingCart,
};

export const PUBLIC_RIGHT_SIDE_ACTIONS: NavItem[] = [SEARCH_ROUTE, CART_ROUTE];

export const NOTIFICATIONS_ITEM: NavItem = {
  title: "Notifications",
  href: "#",
  icon: Bell,
};
