import { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export const ABOUT_ROUTES: NavItem[] = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "News",
    href: "#",
  },
  {
    title: "Partners",
    href: "#",
  },
];

export const SUPPORT_ROUTES: NavItem[] = [
  {
    title: "Help Center",
    href: "#",
  },
  {
    title: "Safety Center",
    href: "#",
  },
  {
    title: "Community Guidelines",
    href: "#",
  },
];

export const LEGAL_ROUTES: NavItem[] = [
  {
    title: "Terms of Service",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Cookie Policy",
    href: "#",
  },
];

export const DOWNLOAD_ROUTES: NavItem[] = [
  {
    title: "Windows",
    href: "#",
  },
  {
    title: "MacOS",
    href: "#",
  },
  {
    title: "iOS",
    href: "#",
  },
  {
    title: "Android",
    href: "#",
  },
];
