import React from "react";
import { AppContext } from "../context/ActionProvider";

const SideNavContainer = ({ children }) => {
    const { showUserAccount } = React.useContext(AppContext);
    return (
        <div
            className={`${
                showUserAccount ? "w-full left-0" : "w-0 -left-full"
            } h-full absolute top-0 bg-darkTheme-dark_100 border-r border-gray-600 transition-all duration-500 ease-in-out`}
        >
            {children}
        </div>
    );
};

export default SideNavContainer;
