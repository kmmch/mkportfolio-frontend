import { Home } from "../components/pages/Home";
import { NotFound } from "../components/pages/NotFound";
import { Test } from "../components/pages/Test";

export const homeRoutes = [
    {
      path: "/",
      children: <Home />
    },
    {
      path: "/test",
      children: <Test />
    },    {
      path: "*",
      children: <NotFound />
    }
  ];