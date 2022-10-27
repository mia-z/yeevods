import React, { FC } from "react";

type VodCardProps = GAPI.PlaylistItem;

export const VodCard: FC<VodCardProps> = ({ snippet: { title, thumbnails } }) => {
    return (
        <div className={"xl:w-1/4 lg:w-1/3 w-2/3 flex flex-col relative shadow-lg cursor-pointer hover:-translate-x-1 hover:-translate-y-1 active:translate-y-0 active:translate-x-0 transition-transform"}>
            <div className={"bg-neutral-800 min-h-full rounded-b-sm"}>
                <img className={"rounded-sm"} loading={"lazy"} src={!thumbnails.standard ? "src/assets/priv-video.png" : thumbnails.standard.url} />            
            </div>
            <div className={"absolute rounded-b-sm h-10 bottom-0 left-0 w-full bg-[rgba(240,240,240,0.2)] flex"}>
                <div className={"my-auto w-full text-center truncate px-2 text-white select-none"}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default VodCard;