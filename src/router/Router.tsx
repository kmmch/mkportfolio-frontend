import { FC, ReactNode, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";

type RouteItem = {
    path: string;
    children: ReactNode;
}
export const Router: FC = memo(() => {
    return (
        <Routes>
            {homeRoutes.map((route: RouteItem) => {
                return (
                    <Route key={route.path} path={route.path} element={route.children} />
                )
            })}
        </Routes>
    );
});