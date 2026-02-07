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
        <div className='flex mx-4 my-2'>
            <div onClick={cerrarSesion} className={`w-full  rounded-lg bg-grayl cursor-pointer`}>
                <div className='flex items-center gap-2 ext-sm py- pl-3'>
                    <i className={`${icon}`}></i>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    )
}