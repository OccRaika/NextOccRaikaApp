import { useAuthStore } from '../store/authStore';

interface ItemProps {
    icon: string,
    label: string,
    path: string,
    img?: string
}

export const MenuItemCerrarSesion = ({
    icon = 'pi pi home',
    label = 'Home',
}: ItemProps) => {
    const { setJWT } = useAuthStore();

    const cerrarSesion = () => {
        setJWT(null);
    }

    return (
        <div className='flex mx-4 my-2 '>
            <div onClick={cerrarSesion} className={`w-full rounded-lg hover:bg-gray-gray cursor-pointer`}>
                <div className='flex items-center gap-2 text-base py-3 pl-3 h-10'>
                    <i className={`${icon}`}></i>
                    <p className='truncate'>{label}</p>
                </div>
            </div>
        </div>
    )
}