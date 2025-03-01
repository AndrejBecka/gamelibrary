"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, Bell, ShoppingCart } from "lucide-react";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
// Import the ThemeToggle component at the top of the file

const HeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isSignedIn } = useUser();

  const navigationMenu = ["Home", "Browse", "Categories"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
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
            {navigationMenu
              .concat(isSignedIn ? ["My Library"] : []) // Conditionally add "My Library" if signed in
              .filter(Boolean) // Filter out any falsy values (e.g., if "My Library" is not added)
              .map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/" // Home goes to root URL
                      : item === "My Library"
                        ? "/mylibrary" // My Library goes to /mylibrary
                        : `/${item.toLowerCase().replace(" ", "-")}` // Other items to lowercase URL
                  }
                  className="text-gray-300 transition-colors duration-200 hover:text-[#00EAFF]"
                >
                  {item}
                </Link>
              ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 transition-colors duration-200 hover:text-[#00EAFF]"
            >
              <Search className="h-5 w-5" />
            </button>

            {isSignedIn && (
              <button className="text-gray-300 transition-colors duration-200 hover:text-[#00EAFF]">
                <Bell className="h-5 w-5" />
              </button>
            )}

            <Link
              href="/cart"
              className="text-gray-300 transition-colors duration-200 hover:text-[#00EAFF]"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* Auth */}
            <div className="flex items-center">
              {isSignedIn ? (
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                    },
                  }}
                />
              ) : (
                <div className="flex space-x-2">
                  <SignInButton mode="modal">
                    <button className="block rounded-2xl border-2 border-white px-2 py-1 font-medium text-white transition-transform duration-200 hover:scale-110">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:rounded-2xl hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-transform duration-200 hover:scale-110 ">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 transition-colors duration-200 hover:text-[#00EAFF] md:hidden"
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

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 top-full w-full bg-black/90 p-4 backdrop-blur-sm">
          <div className="electric-border mx-auto flex max-w-3xl items-center overflow-hidden rounded">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full bg-transparent px-4 py-2 text-white focus:outline-none"
            />
            <button className="bg-[#00EAFF] px-4 py-2 text-black transition-colors duration-200 hover:bg-[#0059FF]">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-black/90 backdrop-blur-sm md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationMenu.filter(Boolean).map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block px-3 py-2 text-gray-300 transition-colors duration-200 hover:text-[#00EAFF]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNavigation;
