import React, { useContext, useEffect } from "react";
import SideNavContainer from "./SideNavContainer";
import EmojiPicker from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { AppContext } from "../context/ActionProvider";
const profileMenuTags = [
    "View photo",
    "Take photo",
    "Update photo",
    "Remove photo",
];

const Label = ({ name }) => {
    return (
        <span className="text-sm font-light text-darkTheme-green">{name}</span>
    );
};

const IconHolder = ({ handleEditClick, isEditActive }) => {
    const [isEmojiBtnClicked, setIsEmojiBtnClicked] = React.useState(false);
    return (
        <div className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center">
            {isEditActive ? (
                <div className="flex items-center justify-center gap-2 showIcons">
                    <p className="text-gray-400 text-sm">20</p>
                    <div className="relative">
                        <button
                            className="fal fa-smile text-darkTheme-light_50"
                            onClick={() =>
                                setIsEmojiBtnClicked(!isEmojiBtnClicked)
                            }
                        />
                        <div
                            className={`absolute right-full bottom-full ${
                                isEmojiBtnClicked ? "scale-100" : "scale-0"
                            } transition-transform origin-bottom-right`}
                        >
                            <EmojiPicker
                                theme={Theme.DARK}
                                skinTonesDisabled={true}
                                height={350}
                                previewConfig={{
                                    showPreview: false,
                                }}
                            />
                        </div>
                    </div>
                    <button
                        className="fal fa-check text-darkTheme-light_50 text-xl"
                        onClick={() => {
                            handleEditClick(false);
                            setIsEmojiBtnClicked(false);
                        }}
                    />
                </div>
            ) : (
                <button
                    className="fas fa-pen text-darkTheme-light_50 showIcons"
                    onClick={() => handleEditClick(true)}
                />
            )}
        </div>
    );
};
const InputContainer = ({ children, type, value, isActive }) => {
    const [isMouseFocused, setIsMouseFocused] = React.useState(false);
    return (
        <div
            className={`relative ${isActive && "border-b-2"} ${
                isMouseFocused ? "border-darkTheme-green" : "border-gray-500"
            }
            } `}
        >
            <input
                type={type}
                value={value}
                className="w-full h-10 rounded-md bg-transparent outline-none text-gray-200"
                readOnly={isActive ? false : true}
                onFocus={() => setIsMouseFocused(true)}
                onBlur={() => setIsMouseFocused(false)}
            />
            {children}
        </div>
    );
};
const UserProfile = () => {
    const [isMouseHovered, setIsMouseHovered] = React.useState(false);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const [menuPosition, setMenuPosition] = React.useState({ x: 0, y: 0 });
    const [isNameEditActive, setIsNameEditActive] = React.useState(false);
    const [isAboutEditActive, setIsAboutEditActive] = React.useState(false);
    const { showUserAccount, setShowUserAccount } = useContext(AppContext);

    function handleMouseHover(e) {
        const element = e.target;
        element.addEventListener("mouseenter", () => {
            setIsMouseHovered(true);
        });
        element.addEventListener("mouseleave", () => {
            setIsMouseHovered(false);
        });
    }
    const handleShowProfileMenu = (e) => {
        setShowProfileMenu(!showProfileMenu);
        setMenuPosition({ x: e.clientX, y: e.clientY });
    };
    function handleClickOutside(e) {
        if (!e.target.parentElement.classList.contains("profileImage"))
            setShowProfileMenu(false);
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    }, []);
    return (
        <SideNavContainer>
            <div className="h-20 bg-darkTheme-dark_30 flex items-center px-10 gap-6">
                <button
                    className="far fa-arrow-left text-darkTheme-light_50 text-xl"
                    onClick={() => setShowUserAccount(false)}
                />
                <h1 className="text-gray-300 font-medium text-lg">Profile</h1>
            </div>
            <div
                className={`${
                    showProfileMenu ? "scale-100" : "scale-0"
                } fixed w-40 rounded-md py-2
                } transition-transform duration-300 ease-in-out bg-darkTheme-dark_50 origin-top-left z-40 flex flex-col`}
                style={{ left: menuPosition.x, top: menuPosition.y }}
            >
                {profileMenuTags.map((tag, indx) => (
                    <span
                        className="text-gray-300 px-6 py-3 text-sm hover:bg-darkTheme-dark_100 cursor-pointer"
                        key={indx}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="h-max w-full flex items-center justify-center pt-10 profileImage">
                <div
                    onClick={(e) => handleShowProfileMenu(e)}
                    className={`h-52 w-52 relative bg-red-500 rounded-full cursor-pointer overflow-hidden profileImage ${
                        showUserAccount ? "animation-scale" : null
                    }`}
                    onMouseEnter={(e) => handleMouseHover(e)}
                    onMouseLeave={(e) => handleMouseHover(e)}
                >
                    <img
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="user profile"
                        className="h-full w-full object-cover overflow-hidden"
                    />
                    <div
                        className={`${
                            isMouseHovered ? "opacity-100" : "opacity-0"
                        } transition-opacity absolute top-0 left-0 duration-200 ease-in-out h-full w-full bg-darkTheme-dark_10 bg-opacity-60 flex items-center justify-center flex-col gap-2`}
                    >
                        <i className="fas fa-camera-alt text-2xl text-gray-200 pointer-events-none" />
                        <p className="text-center uppercase leading-4 text-xs font-normal text-gray-300 pointer-events-none">
                            Change <br /> profile photo
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={`h-max w-full p-6 flex flex-col gap-6 opacity-0 ${
                    showUserAccount ? "animate-transform" : null
                }`}
            >
                <div>
                    <Label name="Your name" />
                    <InputContainer
                        isActive={isNameEditActive}
                        type="text"
                        value={"Rajkumar"}
                    >
                        <IconHolder
                            handleEditClick={(val) => setIsNameEditActive(val)}
                            isEditActive={isNameEditActive}
                        />
                    </InputContainer>
                </div>
                <p className="text-sm text-gray-400">
                    This is not your username or pin. This name will be visible
                    to your WhatsaApp contacts.
                </p>
                <div>
                    <Label name="About" />
                    <InputContainer
                        isActive={isAboutEditActive}
                        type="text"
                        value={"There is no palce like 127.0.0.1"}
                    >
                        <IconHolder
                            handleEditClick={(val) => setIsAboutEditActive(val)}
                            isEditActive={isAboutEditActive}
                        />
                    </InputContainer>
                </div>
            </div>
        </SideNavContainer>
    );
};

export default UserProfile;
