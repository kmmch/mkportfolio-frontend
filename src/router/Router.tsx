import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import { NotFound } from "../components/pages/NotFound";


export const Router:FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});