import {MenuItem} from "./MenuItem";
import { MenuItemIcon } from "./MenuItemIcon"
import "../assets/iconos/style.css"
import { MenuItemCerrarSesion } from "./MenuItemCerrarSesion";
import { MenuItemIconCerrarSesion } from "./MenuItemIconCerrarSesion";
import { classNames } from "primereact/utils";

export const menuItems = () => {

    const leftMenuItems = [
        {
            template : () => (
                <MenuItem label = 'Perfil Interno' icon = "icon-ico-basicos" path = "PerfilInterno"/>
            )
        },
        {
            template : () => (
                <MenuItem label = 'Curriculum' icon = "icon-ico-reportes" path = "Curriculum"/>
            )
        },
        {
            template : () => (
                <MenuItem label = 'Horarios' icon = "icon-ico-textra" path = "Horarios"/>
            )
        },
        {
            separator: true,
        }
        ,
        {
            template : () => (
                <MenuItemCerrarSesion label = 'Cerrar Sesión' icon = "icon-ico-salir" path = ""/>
            )
        },
    ];

    const leftMenuItemsIcons = [
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-basicos" path = "PerfilInterno"/>
            )
        },
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-reportes" path = "Curriculum"/>
            )
        },
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-textra" path = "Horarios"/>
            )
        },
        
        {
            separator: true
        }
        ,
        {
            template : () => (
                <MenuItemIconCerrarSesion icon = "icon-ico-salir"/>
            )
        },
    ];


    return {
        leftMenuItems,
        leftMenuItemsIcons
    }
}
