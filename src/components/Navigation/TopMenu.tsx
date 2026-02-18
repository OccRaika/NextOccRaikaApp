'use client'
import Link from "next/link";
import MenuSmartphone from "./MenuSmartphone";

export const TopMenu = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-gray-menus w-full text-white">
      <div className={`lg:hidden`}>
        <MenuSmartphone></MenuSmartphone>
      </div>
      <div></div>
      <div className=" text-center">OCC RAIKA</div>
      <div className="flex min-w-1/12 pr-2">
        <Link
          href={{
            pathname: "/login",
            query: { name: "test" },
          }}
          className={`w-full rounded-lg px-4 hover:bg-gray-gray"}`}
        >Iniciar sesión</Link>
        <i className="pi pi-user p-1" style={{ fontSize: "1rem" }}></i>
      </div>
    </div>
  );
};
