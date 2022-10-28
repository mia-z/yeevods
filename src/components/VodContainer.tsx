import React, { FC } from "react";
import VodCard from "./VodCard";
import VodSkeleton from "./VodSkeleton";

type VodContainerProps = {
    vods: GAPI.PlaylistItem[] | undefined,
    isLoading: boolean
}

export const VodContainer: FC<VodContainerProps> = ({ vods, isLoading }) => {
    return (
        <div className={"mx-auto flex sm:flex-row flex-wrap gap-3 justify-center mt-5"}>
            {
                isLoading ?
                Array.from([1,2,3,4,5,6]).map((number, index) => <VodSkeleton key={number} />) :
                vods?.map((vod, index) => <VodCard {...vod} key={vod.etag} />)
            }
        </div>
    );
}

export default VodContainer;