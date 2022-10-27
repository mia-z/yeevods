import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./pages/Layout";
import Vod from "./pages/Vod";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout /> }>
                    <Route index element={<Home />} />
                    <Route path={"vod"} element={<Vod />} />
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}

export default App;