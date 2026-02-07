interface ItemProps {
    icon: string,
    label: string,
    path: string,
}

export const MenuItem = ({
    icon = 'pi pi home',
    label = 'Home',
    path = '',
}: ItemProps) => {

    return (

        <div className='flex mx-4 my-2'>
            <div
                // className={({ isActive }) => {
                //     return `w-full  rounded-lg ${isActive ? 'active' : 'hover:bg-grayl'} `
                // }}
                // to={`/${path}`}
            >
                <div className='flex items-center gap-2 ext-sm py-3 pl-3'>
                    <i className={`${icon}`}></i>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    )
}