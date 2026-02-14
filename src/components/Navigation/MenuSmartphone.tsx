"use client";

import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { useRef, useState } from "react";
import MenuBurgerIcon from "./MenuBurgerIcon";
import { menuItems } from "./menus/menuItems";

export default function RotatingArrow() {
  const menuLeft = useRef<Menu>(null);
  const { leftMenuItems } = menuItems();

  return (
    <div className="flex items-center justify-center">
      <Menu
        model={leftMenuItems}
        className="bg-gray-menus w-fit rounded-none text-white duration-500"
        pt={{
          separator: { className: "my-4 border-t border-gray-300" },
        }}
        popup
        ref={menuLeft}
        id="popup_menu_left"
        unstyled
      />
      <Button
        className="text-center"
        onClick={(event) => menuLeft.current?.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
        unstyled
      >
        <MenuBurgerIcon></MenuBurgerIcon>
      </Button>
    </div>
  );
}
