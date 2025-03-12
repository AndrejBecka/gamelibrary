"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import {
  type NavItem,
  NOTIFICATIONS_ITEM,
  PRIVATE_HEADER_ROUTES,
  PUBLIC_HEADER_ROUTES,
  PUBLIC_RIGHT_SIDE_ACTIONS,
  SEARCH_ROUTE,
} from "./public-header.routes";
import { RightSideActions } from "./right-side-action";
import { cn } from "~/lib/utils";
import { NavigationLinks } from "./navigation-links";
import { PUBLIC_ROUTES } from "~/routes/routes";
import { MobileMenu } from "./mobile-menu";
import { AuthButton } from "./auth-buttons";
// Import the ThemeToggle component at the top of the file

export const PublicHeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = isSignedIn
    ? [...PUBLIC_HEADER_ROUTES, ...PRIVATE_HEADER_ROUTES]
    : PUBLIC_HEADER_ROUTES;

  const rightSideActionItems = isSignedIn
    ? [
        PUBLIC_RIGHT_SIDE_ACTIONS[0] ?? SEARCH_ROUTE,
        NOTIFICATIONS_ITEM,
        ...PUBLIC_RIGHT_SIDE_ACTIONS.slice(1),
      ].filter((item): item is NavItem => item !== undefined)
    : PUBLIC_RIGHT_SIDE_ACTIONS;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/80 to-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href={PUBLIC_ROUTES.HOME} className="flex items-center">
              <span className="metallic-text text-2xl font-bold">
                GAME STORM
              </span>
            </Link>
          </div>

          <NavigationLinks navigationItems={navigationItems} />

          <div className="flex items-center space-x-4">
            <RightSideActions
              items={rightSideActionItems}
              onClickHandlers={{ Search: () => setIsSearchOpen(!isSearchOpen) }}
            />

            {!isSignedIn ? (
              <AuthButton />
            ) : (
              <UserButton afterSwitchSessionUrl={PUBLIC_ROUTES.HOME} />
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 opacity-90 transition-colors duration-200 hover:opacity-100 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navigationItems={navigationItems}
        isSignedIn={isSignedIn}
      />
    </header>
  );
};
