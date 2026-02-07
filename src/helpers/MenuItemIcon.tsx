
interface ItemProps {
    icon?: string,
    path: string,
}

export const MenuItemIcon = ({
    icon = 'pi pi home',
    path = '',
}: ItemProps) => {

    return (
        <div className='flex mx-4 my-2'>
            <div
                // onClick={() => { console.log("clickmenu") }}
                // className={({ isActive }) => {
                //     return `w-12 ${isActive ? 'active' : ''} `
                // }}
                // to={`/${path}`}
            >
                <div className='flex items-center ext-sm py-4'>
                    <i className={`${icon} pl-4 text-base`}></i>
                </div>
            </div>
        </div>
    )
}