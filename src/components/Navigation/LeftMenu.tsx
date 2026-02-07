'use client'
import { Menu } from 'primereact/menu';
import { leftBarStore } from '@/store/leftBarStatus';
import { menuItems } from '@/helpers/menuItems';
import { Button } from 'primereact/button';

const LeftMenu = () => {

    const { leftMenuItemsIcons, leftMenuItems } = menuItems();

    const leftBarStatus = leftBarStore((state) => state.status)
    const setLeftBarStatus = leftBarStore((state) => state.changeStatus)

    const toolBarSetLocalStorage = () => {
        setLeftBarStatus(!leftBarStatus);
    }

    return (
        <div className={`${leftBarStatus ? 'w-48' : 'w-20'} h-full relative flex flex-col items-center transition-all duration-300 bg-gray-menus`}>

            <button className="flex justify-center items-center h-16 pt-1 mb-4" onClick={toolBarSetLocalStorage}>
                <img src="https://i.ibb.co/kgRT6Vw/logo-raika.png" width={`${leftBarStatus ? '100px' : '60px'}`} />
            </button>

            {
                leftBarStatus 
                ? (<Menu model={leftMenuItems} className='bg-amber-800 w-44 border-0 rounded-none text-white duration-500' unstyled></Menu>)
                : (<Menu model={leftMenuItemsIcons} className='bg-gray-menus w-20 border-0 rounded-none text-white duration-300'></Menu>)
            }

        </div>
    )
}

export default LeftMenu;