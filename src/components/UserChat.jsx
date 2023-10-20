import React, { useState } from "react";
import ProfilePic from "./ProfilePic";

const UserChat = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-max w-full flex items-center justify-start gap-6 hover:bg-gray-800 px-3 cursor-pointer"
        >
            <div className="w-12">
                <ProfilePic />
            </div>
            <div className="flex h-full w-full items-center justify-center border-b border-gray-800 py-3">
                <div className="w-full">
                    <h1 className="font-normal text-white text-lg">
                        Rajkumar Kalita
                    </h1>
                    <p className="text-darkTheme-light_50 text-sm font-light">
                        Hey! How are you? Nice to meet your bruh...
                    </p>
                </div>
                <div className="w-16 flex flex-col items-end justify-center h-full gap-2">
                    <p className="text-xs text-darkTheme-light_50 font-light">
                        Tuesday
                    </p>
                    <div className="flex items-center gap-1">
                        <p className="h-5 w-5 rounded-full bg-darkTheme-green text-darkTheme-dark_50 font-bold text-xs grid place-items-center">
                            2
                        </p>
                        <p
                            className={`far fa-angle-down text-darkTheme-light_50 text-lg ${
                                isHovered
                                    ? "w-max px-1 visible"
                                    : "w-0 invisible"
                            } transition-all duration-150 ease-in-out `}
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserChat;
