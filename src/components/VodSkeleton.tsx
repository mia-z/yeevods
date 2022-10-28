import React, { FC } from "react";
import { BsCameraVideoFill } from "react-icons/bs";

export const VodSkeleton: FC = () => {
    return (
        <div className={"xl:w-1/4 lg:w-1/3 h-72 w-96 flex flex-col relative shadow-lg cursor-pointer hover:-translate-x-1 hover:-translate-y-1 active:translate-y-0 active:translate-x-0 transition-transform"}>
            <div className={"relative bg-neutral-800 min-h-full xl:w-80 2xl:w-96 rounded-b-sm animate-pulse"}>
                <BsCameraVideoFill className={"absolute top-[calc(50%-24px)] left-[calc(50%-24px)] text-5xl"} />
            </div>
            <div className={"absolute animate-pulse rounded-b-sm h-10 bottom-0 left-0 w-full bg-[rgba(240,240,240,0.2)] flex justify-center"}>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-1/2 h-2/6"}></div>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-2/6 ml-2 h-2/6"}></div>
            </div>
            <div className={"absolute animate-pulse h-7 w-3/5 px-3 py-1 top-2 text-sm text-gray-300 left-2 rounded-lg bg-[rgba(240,240,240,0.2)] flex"}>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-1/12 h-1/2"}></div>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-3/12 ml-1 h-1/2"}></div>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-4/12 ml-1 h-1/2"}></div>
                <div className={"bg-stone-300 my-auto rounded-full pulse w-1/12 ml-1 h-1/2"}></div>
            </div>
        </div>
    )
}

export default VodSkeleton;