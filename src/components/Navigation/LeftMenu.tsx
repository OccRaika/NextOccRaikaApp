"use client";
import { Menu } from "primereact/menu";
import { leftBarStore } from "@/store/leftBarStatus";
import { menuItems } from "./menus/menuItems";


const LeftMenu = () => {
  const { leftMenuItemsIcons, leftMenuItems } = menuItems();

  const leftBarStatus = leftBarStore((state) => state.status);
  const setLeftBarStatus = leftBarStore((state) => state.changeStatus);

  const toolBarSetLocalStorage = () => {
    setLeftBarStatus(!leftBarStatus);
  };

  return (
    <div
      className={`${leftBarStatus ? "w-48" : "w-20"} lg:flex lg:flex-col h-full relative hidden items-center transition-all ease-in-out duration-700 bg-gray-menus`}
    >
      <button
        className="flex justify-center items-center h-16 pt-1 mb-4"
        onClick={toolBarSetLocalStorage}
      >
        <img
          src="https://i.ibb.co/kgRT6Vw/logo-raika.png"
          width={`${leftBarStatus ? "100" : "60"}`}
          alt=""
        />
      </button>

      {leftBarStatus ? (
        <Menu
          model={leftMenuItems}
          className="bg-gray-menus w-full border-0 rounded-none text-white duration-1100"
          unstyled
          pt={{
            separator: { className: "my-4 border-t border-gray-300" },
          }}
        ></Menu>
      ) : (
        <Menu
          model={leftMenuItemsIcons}
          className="bg-gray-menus w-20 border-0 rounded-none text-white duration-700 "
          unstyled
          pt={{
            separator: { className: "my-4 border-t border-gray-300" },
          }}
        ></Menu>
      )}
    </div>
  );
};

export default LeftMenu;
