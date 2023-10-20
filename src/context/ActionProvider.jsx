import { createContext, useState } from "react";

export const AppContext = createContext(null);

const ActionProvider = ({ children }) => {
    const [showUserAccount, setShowUserAccount] = useState(false);

    return (
        <AppContext.Provider
            value={{
                showUserAccount,
                setShowUserAccount,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default ActionProvider;
