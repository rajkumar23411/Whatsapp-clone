import React from "react";
import Header from "./Header";
import ChartSideBarHeader from "./ChartSideBarHeader";
import ChartHeaderSearchBar from "./ChartHeaderSearchBar";
import ChatsHolder from "./ChatsHolder";

const ChatSideBar = () => {
    return (
        <div className="h-full w-full bg-darkTheme-dark_100 border-r border-gray-600 overflow-hidden flex flex-col">
            <div className="h-max">
                <Header>
                    <ChartSideBarHeader />
                </Header>
                <ChartHeaderSearchBar />
            </div>
            <ChatsHolder />
        </div>
    );
};

export default ChatSideBar;
