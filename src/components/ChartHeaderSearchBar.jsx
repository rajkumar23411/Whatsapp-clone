import { useState } from "react";

const ChartHeaderSearchBar = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    return (
        <div className="h-14 w-full py-2 px-4 flex items-center justify-center gap-4">
            <div className="flex items-center justify-center bg-darkTheme-dark_30 h-full px-3 text-base w-full rounded-lg">
                <div
                    className={` ${
                        isInputFocused
                            ? "far fa-arrow-left text-darkTheme-green text-xl rotate-animation"
                            : "far fa-search text-darkTheme-light_50 text-sm reverse-rotate-animation"
                    } w-max h-full flex items-center justify-center cursor-pointer`}
                ></div>
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="w-full h-full bg-transparent outline-none mx-6 text-sm placeholder:text-sm placeholder:text-darkTheme-light_50 text-darkTheme-light_50"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
            </div>
            <div className="fal fa-line-height w-max h-full flex items-center justify-center text-darkTheme-light_50 text-base cursor-pointer"></div>
        </div>
    );
};

export default ChartHeaderSearchBar;
