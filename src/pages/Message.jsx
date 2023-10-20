import { useState } from "react";
import ChatSideBar from "../components/ChatSideBar";
import Greet from "../components/Greet";
import UserProfile from "../components/UserProfile";

const Message = () => {
    const [showUserProfile, setShowUserProfile] = useState(false);
    return (
        <div className="h-screen w-screen flex bg-black p-4">
            <div className="w-[40rem] h-full relative overflow-hidden">
                <ChatSideBar />
                <UserProfile />
            </div>
            <div className="w-full">
                <Greet />
            </div>
        </div>
    );
};

export default Message;
