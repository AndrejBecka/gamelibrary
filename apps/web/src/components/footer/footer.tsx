import { FooterSection } from "./footer-sections";
import {
  ABOUT_ROUTES,
  DOWNLOAD_ROUTES,
  LEGAL_ROUTES,
  SUPPORT_ROUTES,
} from "./footer.routes";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <FooterSection title="Game Storm" items={ABOUT_ROUTES} />
          <FooterSection title="Support" items={SUPPORT_ROUTES} />
          <FooterSection title="Legal" items={LEGAL_ROUTES} />
          <FooterSection title="Download" items={DOWNLOAD_ROUTES} />
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
