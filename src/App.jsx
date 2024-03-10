import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "constants/routes";

import { Layout } from "components/Layout/Layout";

import { AppWrapper } from "src/App.styled";
import { Suspense, lazy } from "react";
import { Loader } from "./components/Loader/Loader";

const Home = lazy(() => import("pages/Home"));
const Catalog = lazy(() => import("pages/Catalog"));
const Favorite = lazy(() => import("pages/Favorite"));

const appRoutes = [
  {
    path: ROUTES.HOME_PAGE,
    element: <Home />,
  },
  {
    path: ROUTES.CATALOG_PAGE,
    element: <Catalog />,
  },
  {
    path: ROUTES.FAVORITE_PAGE,
    element: <Favorite />,
  },
];

export const App = () => {
  return (
    <AppWrapper>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route
              path="/*"
              element={<Navigate to={ROUTES.HOME_PAGE} replace={true} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </AppWrapper>
  );
};
