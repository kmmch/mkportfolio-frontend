import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
});