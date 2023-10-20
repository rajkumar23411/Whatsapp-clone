import React from "react";
import heroImage from "@/assets/native-desktop-hero.png";
const Greet = () => {
    return (
        <div className="h-full w-full bg-darkTheme-dark_50 relative flex items-center justify-center flex-col gap-5">
            <img src={heroImage} alt="pc" className="h-48" />
            <h1 className="text-4xl text-gray-200 font-light">
                WhatsApp for Windows
            </h1>
            <p className="w-1/2 text-center text-gray-400 font-light">
                Make calls, share your screen and get a faster experience when
                you download the Windows app.
            </p>
            <button className="bg-darkTheme-green text-sm font-medium px-6 py-3 rounded-3xl">
                Get the app
            </button>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-gray-500 text-sm">
                <i className="fas fa-lock text-xs"></i>
                <span>Your personal message are end-to-end encrypted</span>
            </p>
        </div>
    );
};

export default Greet;
