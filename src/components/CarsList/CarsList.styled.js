import styled from "styled-components";

export const CarsListWrapper = styled.div`
  & .carsListSection {
    padding-top: 100px;
  }

  & .carsList {
    display: flex;
    flex-wrap: wrap;
    column-gap: 29px;
    row-gap: 50px;
    justify-content: center;
  }
`;
