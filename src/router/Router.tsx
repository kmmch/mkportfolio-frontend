import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import { NotFound } from "../components/pages/NotFound";
import { Page } from "../components/pages/Page";


export const Router:FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page/:id" element={<Page />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});