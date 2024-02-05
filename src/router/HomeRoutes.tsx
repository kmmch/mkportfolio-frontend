import { Home } from "../components/pages/Home";
import { NotFound } from "../components/pages/NotFound";

export const homeRoutes = [
    {
      path: "/",
      children: <Home />
    },
    {
      path: "*",
      children: <NotFound />
    }
  ];