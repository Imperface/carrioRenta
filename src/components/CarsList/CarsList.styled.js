import styled from "styled-components";

export const CarsListWrapper = styled.div`
  & .carsListSection {
    padding: 100px 0;
  }

  & .carsList {
    display: flex;
    flex-wrap: wrap;
    column-gap: 29px;
    row-gap: 50px;
    justify-content: center;
  }
  & .loadMoreButton {
    display: block;
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;

    margin: 0 auto;
    margin-top: 100px;

    border: none;
    background-color: transparent;

    color: ${(props) => props.theme.accent};
    transition: all 0.5s;

    &:hover {
      color: ${(props) => props.theme.accentHover};
    }
  }
`;
