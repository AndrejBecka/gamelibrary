import Link from "next/link";
import { type NavItem } from "./public-header.routes";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: NavItem[];
  isSignedIn: boolean | undefined;
}

export const MobileMenu = ({
  isOpen,
  navigationItems,
  isSignedIn,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="align-item justify-items-center bg-black/90 backdrop-blur-sm md:hidden">
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
  );
};
