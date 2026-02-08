import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
  icon: string;
  label: string;
  path: string;
}

export const MenuItem = ({ icon = "pi pi home", label = "Home", path = "",
}: ItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <div className="flex mx-4 my-2 h-10">
      <Link
        href={path}
        className={`w-full rounded-lg ${isActive ? "active" : "hover:bg-grayl"}`}
      >
        <div className="flex items-center gap-2 text-base py-3 pl-3 h-10">
          <i className={`${icon}`}></i>
          <p className="truncate">{label} </p>
        </div>
      </Link>
    </div>
  );
};
