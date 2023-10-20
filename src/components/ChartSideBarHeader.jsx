import { useEffect, useState } from "react";
import ProfilePic from "./ProfilePic";

const ChartSideBarHeader = () => {
    const [isActive, setIsActive] = useState(false);
    const menu = [
        "New Group",
        "New Community",
        "Starred Messages",
        "Select chats",
        "Settings",
        "Logout",
        "Get WhatsApp for Windows",
    ];
    const handleShowMenu = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (
                !e.target.classList.contains("menuBtn") &&
                !e.target.classList.contains("menuList") &&
                !e.target.parentNode.classList.contains("menuList")
            ) {
                setIsActive(false);
            }
            if (e.target.classList.contains("menuList")) {
                setIsActive(!isActive);
            }
        });
    }, [isActive]);
    return (
        <div className="w-full h-full flex items-center justify-between px-4">
            <ProfilePic />
            <div className="flex items-center justify-center gap-2">
                <i className="fas fa-users text-darkTheme-light_50 text-xl cursor-pointer w-10 h-10 grid place-items-center "></i>
                <i className="fas fa-crosshairs text-darkTheme-light_50 text-xl cursor-pointer w-10 h-10 grid place-items-center "></i>
                <i className="fas fa-yin-yang text-darkTheme-light_50 text-xl cursor-pointer w-10 h-10 grid place-items-center "></i>
                <i className="fas fa-folder-plus text-darkTheme-light_50 text-xl cursor-pointer w-10 h-10 grid place-items-center "></i>
                <div className="relative menuList">
                    <button
                        onClick={handleShowMenu}
                        className={`fal fa-ellipsis-v text-3xl menuBtn text-darkTheme-light_50 cursor-pointer w-10 h-10 grid place-items-center transition-all ease-in-out duration-300 ${
                            isActive && "bg-gray-700 rounded-full"
                        }`}
                    ></button>
                    <div
                        className={` menuList
                        ${isActive ? "scale-100" : "scale-0"}
                        absolute top-11 right-0 bg-darkTheme-dark_10 z-10 w-max py-2 transition-transform origin-top-right ease-in-out rounded-lg drop-shadow-md`}
                    >
                        {menu.map((tag, indx) => (
                            <p
                                key={indx}
                                className="text-gray-300 font-normal text-sm py-3 px-6 hover:bg-darkTheme-dark_100 cursor-pointer"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartSideBarHeader;
