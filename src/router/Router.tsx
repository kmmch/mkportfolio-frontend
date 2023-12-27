import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { NotFound } from "../components/pages/NotFound";
// import { Page } from "../components/pages/Page";
import { Home } from "../components/pages/Home";


export const Router:FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});