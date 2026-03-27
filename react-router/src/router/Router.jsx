import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        {page1Routes.map((route, index) =>
          route.index ? (
            <Route key={index} index element={route.element} />
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          ),
        )}
      </Route>
      <Route path="/page2">
        {page2Routes.map((route, index) =>
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
};

//<Route index element={<Page1 />} />
//<Route path="detailA" element={<Page1DetailA />} />
//<Route path="detailB" element={<Page1DetailB />} /> */
