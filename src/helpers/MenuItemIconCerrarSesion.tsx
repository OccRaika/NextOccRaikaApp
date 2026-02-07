import { useAuthStore } from '../store/authStore';

interface ItemProps {
    icon?: string
}

export const MenuItemIconCerrarSesion = ({
    icon = 'pi pi home'
}: ItemProps) => {
    const { setJWT } = useAuthStore();

    const cerrarSesion = () => {
        setJWT(null);
    }
    return (
        <div className='flex mx-4 my-2 cursor-pointer'>
            <div onClick={cerrarSesion} className="w-12">
                <i className={`${icon} py-3 pl-4 text-base`}></i>
            </div>
        </div>
    )
}