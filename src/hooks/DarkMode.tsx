import React, { Dispatch, createContext, FC, PropsWithChildren, useState, useEffect, SetStateAction, useCallback } from "react";
import { darkModeOff, darkModeOn } from "../lib/DarkMode";

export type DarkModeThemerProps = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export const DarkModeThemerContext = createContext<DarkModeThemerProps>({ darkMode: false, toggleDarkMode: () => null }); 

const DarkModeThemer = DarkModeThemerContext.Provider;

export const DarkMode: FC<PropsWithChildren> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleDarkMode = useCallback(() => {
        if (darkMode) {
            setDarkMode(false)
            darkModeOff();
        } else {
            setDarkMode(true)
            darkModeOn();
        }
    }, [darkMode]);

    return (
        <DarkModeThemer value={{ darkMode, toggleDarkMode }}>
            <div className={`${darkMode ? "dark" : ""}`}>
                <div className={"bg-[whitesmoke] transition-colors dark:bg-slate-800 dark:text-white min-h-screen"}>
                    {children}
                </div>
            </div>
        </DarkModeThemer>
    );
}

export default DarkMode;