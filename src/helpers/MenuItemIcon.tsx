import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
  icon?: string;
  path: string;
}

export const MenuItemIcon = ({ icon = "pi pi home", path = "" }: ItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <div className="flex mx-4 my-2 h-10">
      <Link
        href={path}
        className={`w-full rounded-lg ${isActive ? "active" : "hover:bg-grayl"}`}
      >
        <div className="gap-2 text-base py-3 pl-3 h-10">
          <i className={`${icon}`}></i>
        </div>
      </Link>
    </div>
  );
};
