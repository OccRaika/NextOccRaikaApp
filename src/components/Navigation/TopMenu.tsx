import MenuSmartphone from "./MenuSmartphone"


export const TopMenu = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-gray-menus w-full text-white">
                <div className="">
                    <MenuSmartphone></MenuSmartphone>
                </div>
                <div className=" text-center">OCC RAIKA</div>
                <div className="flex min-w-1/12 pr-2">
                    <p>Username</p>
                    <i className="pi pi-user p-1" style={{ fontSize: '1rem' }}></i>
                </div>
        </div>

    )
}
