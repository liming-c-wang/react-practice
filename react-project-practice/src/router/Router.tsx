import { memo, type FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home">
        {homeRoutes.map((route, index) =>
          route.index ? (
            <Route key={index} index element={route.element} />
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          ),
        )}
      </Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
});
