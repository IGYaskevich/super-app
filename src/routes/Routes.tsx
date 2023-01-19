import { Route, Routes } from "react-router-dom";
import { ROUTES_NAMES } from "./routesNames";
import { Home } from "../pages/Home";
import { PostPage } from "../pages/Posts";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.HOME} element={<Home />} />
      <Route path={ROUTES_NAMES.POST} element={<PostPage />} />
    </Routes>
  );
};
