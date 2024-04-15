import { RouteObject } from "react-router-dom";
import { About } from "../../../pages/about/About";
import { Home } from "../../../pages/home/Home";
import { PrivacyPolicy } from "../../../pages/privacyPolicy/PrivacyPolicy";
import { Configuration } from "../../../pages/configuration/Configuration";
import { Suspense } from "react";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<></>}>
        <About />
      </Suspense>
    ),
  },

  {
    path: "/about/privacy_policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/configuration",
    element: <Configuration />,
  },
  {
    path: "/*",
    element: (() => {
      return (
        <div>
          <p>404 - страница не найдена</p>
          <a href='/'>&larr; вернуться на главную</a>
        </div>
      );
    })(),
  },
];
