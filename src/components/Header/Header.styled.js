import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid white;
  & .header-nav__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 5px;
  }

  & .header-nav__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .header-nav__link {
    padding: 14px 44px;
    border-radius: 20px;
    border: none;
    transition: all 0.5s;
    font-size: 20px;
    color: ${(props) => props.theme.main};
    background-color: ${(props) => props.theme.accent};

    &.active {
      color: ${(props) => props.theme.mainHover};
      background-color: ${(props) => props.theme.accentHover};
    }

    &:hover {
      color: ${(props) => props.theme.mainHover};
    }
  }
`;
