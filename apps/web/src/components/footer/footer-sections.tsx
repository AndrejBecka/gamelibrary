import Link from "next/link";
import { type NavItem } from "./footer.routes";

interface FooterSectionProps {
  title: string;
  items: NavItem[];
}

export const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="space-y-4 text-lg font-bold">{title}</h3>
      <ul className="space-y-2 py-4">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="text-gray-300 hover:text-white">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
