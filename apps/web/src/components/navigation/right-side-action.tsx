import Link from "next/link";
import { type NavItem } from "./public-header.routes";

interface RightSideActionsProps {
  items: NavItem[];
  onClickHandlers?: Record<string, () => void>;
}

export const RightSideActions = ({
  items,
  onClickHandlers = {},
}: RightSideActionsProps) => {
  return (
    <div className="flex items-center space-x-4">
      {items.map(({ title, href, icon: Icon }) => {
        const Component = href === "#" ? "button" : Link;
        return (
          <Component
            key={title}
            href={href}
            className="text-gray-300 opacity-90 transition-colors duration-200 hover:opacity-100"
            onClick={onClickHandlers[title]}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </Component>
        );
      })}
    </div>
  );
};
