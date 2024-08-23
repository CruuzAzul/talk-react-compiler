import React, { createContext, useContext, useState } from 'react';

// Create the context
interface ShowRerenderContextProps {
    showRerender: boolean;
    setShowRerender: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowRerenderContext = createContext<ShowRerenderContextProps | undefined>(undefined);

// Create a custom hook to access the context
export const useShowRerender = (): ShowRerenderContextProps => {
    const context = useContext(ShowRerenderContext);
    if (!context) {
        throw new Error('useShowRerender must be used within a ShowRerenderProvider');
    }
    return context;
};

interface ShowRerenderProviderProps {
    children: React.ReactNode
}

export const ShowRerenderProvider = ({ children }: ShowRerenderProviderProps) => {
    const [showRerender, setShowRerender] = useState(false);

    return (
        <ShowRerenderContext.Provider value={{ showRerender, setShowRerender }}>
            {children}
        </ShowRerenderContext.Provider>
    );
};