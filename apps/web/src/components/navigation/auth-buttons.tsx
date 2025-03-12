import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export const AuthButton = () => {
  return (
    <div className="hidden space-x-2 md:flex">
      <SignInButton mode="modal">
        <Button className="block rounded-2xl border-2 border-white bg-opacity-0 px-3 py-1 text-white backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:bg-transparent">
          Sign In
        </Button>
      </SignInButton>
      <SignUpButton>
        <Button className="block rounded-md bg-opacity-0 px-3 py-2 font-medium text-gray-700 transition-transform duration-200 hover:scale-110 hover:rounded-2xl hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
          Sign Up
        </Button>
      </SignUpButton>
    </div>
  );
};
