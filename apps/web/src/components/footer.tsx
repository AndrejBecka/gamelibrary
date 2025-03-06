import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="space-y-4 text-lg font-bold">Game Storm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="space-y-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="space-y-4 text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="space-y-4 text-lg font-bold">Download</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  MacOS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  iOS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Android
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <div className="flex items-center space-y-4 md:space-y-0">
            <span className="bg-clip-text text-xl font-bold text-transparent text-white">
              Game Storm
            </span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Game Storm. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
