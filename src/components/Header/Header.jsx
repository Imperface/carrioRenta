import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./Header.styled";
import { ROUTES } from "../../constants/routes";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Container className="header-container">
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to={ROUTES.HOME_PAGE}>
                Home
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to={ROUTES.CATALOG_PAGE}>
                Catalog
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to={ROUTES.FAVORITE_PAGE}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};
