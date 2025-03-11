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
// Import the ThemeToggle component at the top of the file

export const PublicHeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isSignedIn } = useUser();

  // Handle scroll effect
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
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center">
              <span className="metallic-text text-2xl font-bold">
                GAME STORM
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navigationItems.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="text-gray-300 opacity-90 transition-colors duration-200 hover:opacity-100"
              >
                {title}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <RightSideActions
              items={rightSideActionItems}
              onClickHandlers={{ Search: () => setIsSearchOpen(!isSearchOpen) }}
            />

            {/* Auth - Show Sign In / Sign Up on Desktop */}
            {!isSignedIn ? (
              <div className="hidden space-x-2 md:flex">
                <SignInButton mode="modal">
                  <button className="block rounded-2xl border-2 border-white px-3 py-1 font-medium text-white transition-transform duration-200 hover:scale-110">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-transform duration-200 hover:scale-110 hover:rounded-2xl hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            ) : (
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }}
              />
            )}

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-black/90 backdrop-blur-sm md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="block px-3 py-2 text-gray-300 transition-colors duration-200 hover:opacity-100"
              >
                {title}
              </Link>
            ))}

            {/* Auth (Only visible in mobile menu) */}
            {!isSignedIn && (
              <div className="mt-4 flex flex-col space-y-2">
                <SignInButton mode="modal">
                  <button className="block rounded-2xl border-2 border-white px-4 py-2 font-medium text-white transition-transform duration-200 hover:scale-110">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="block rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-transform duration-200 hover:scale-110 hover:rounded-2xl hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
