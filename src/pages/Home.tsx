import React, { Suspense, FC } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchVodsQuery } from "../lib/Queries";
import { useQuery } from "react-query";
import VodContainer from "../components/VodContainer";

export const Home: FC = () => {
    const { data, error, isLoading, isError } = useQuery("vods", fetchVodsQuery);

    return (
        <div className={"sm:container mx-auto flex flex-col"}>
            <VodContainer isLoading={isLoading} vods={data?.items} />
        </div>
    );
}

export default Home;