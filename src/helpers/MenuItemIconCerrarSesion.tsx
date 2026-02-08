import { Tooltip } from 'primereact/tooltip';
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

        <>
      <div className="flex ml-4 mr-6 my-2 h-10 linkMenu rounded-lg hover:bg-gray-gray" data-pr-tooltip={"Cerrar Sesión"}>
          <div onClick={cerrarSesion}  className="gap-2 text-base py-3 pl-3 h-10">
            <i className={`${icon}`}></i>
          </div>
      </div>
      <Tooltip target=".linkMenu" mouseTrack mouseTrackLeft={20} />
    </>
    )
}