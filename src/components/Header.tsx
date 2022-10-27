import React, { FC, useCallback, useContext } from "react";
import { DarkModeThemerContext } from "../hooks/DarkMode";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export const Header: FC = () => {
    const { toggleDarkMode, darkMode } = useContext(DarkModeThemerContext);

    return (
        <header className={"h-20 dark:bg-slate-700 shadow-lg"}>
            <div className={"grid md:grid-cols-5 grid-cols-3 grid-rows-1 h-full"}>
                <div className={"col-start-1 md:col-start-2"}>
                    <img draggable={false} className={"ml-auto mt-2 h-18 w-16 object-scale-down"} src="/android-chrome-192x192.png" />
                </div>
                <div className={"col-span-1 md:col-start-3 col-start-2 relative flex"}>
                    <div className={"select-none relative text-4xl m-auto"}>
                        <span className={"font-bold text-lime-400"}>YEE</span> Vods
                    </div>
                </div>
                <div className={"col-span-1 md:col-start-5 col-start-3 relative flex"}>
                    <div onClick={toggleDarkMode} className={"my-auto ml-auto mr-5 select-none switch-container cursor-pointer bg-white relative rounded-full top-0 left-0 h-9 w-16 flex flex-row p-1"}>
                        <div className={`absolute top-[3px] left-1 h-4/5 w-1/2 rounded-full dark:bg-slate-800 bg-white shadow-inset-button transition-transform ${darkMode ? "translate-x-6" : ""}`}>
                            &nbsp;
                        </div>
                        <BsMoonFill className={"w-1/2 h-full text-slate-700"} />
                        <BsSunFill className={"w-1/2 h-full text-amber-300"} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;