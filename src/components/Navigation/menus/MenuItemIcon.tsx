import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "primereact/tooltip";

interface ItemProps {
  icon?: string;
  path: string;
}

export const MenuItemIcon = ({ icon = "pi pi home", path = "" }: ItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === "/Contenido/" + path;
  return (
    <>
      <div className="flex ml-4 mr-6 my-2 h-10 linkMenu" data-pr-tooltip={path}>
        <Link
          href={path}
          className={`w-full rounded-lg ${isActive ? "active" : "hover:bg-gray-gray"}`}
        >
          <div className="gap-2 text-base py-3 pl-3 h-10">
            <i className={`${icon}`}></i>
          </div>
        </Link>
      </div>
      <Tooltip target=".linkMenu" mouseTrack mouseTrackLeft={20} />
    </>
  );
};
