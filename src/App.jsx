import { Route, Routes } from "react-router-dom";

import { ROUTES } from "constants/routes";

import { Layout } from "components/Layout/Layout";

import { AppWrapper } from "src/App.styled";

import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Favorite from "pages/Favorite";

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
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </AppWrapper>
  );
};
