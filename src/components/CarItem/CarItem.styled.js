import styled from "styled-components";

export const CarItemWrapper = styled.li`
  width: 274px;
  min-height: 426px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  & .imageBlock {
    width: 100%;
    height: 268px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 14px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .mainInfoBlock {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    column-gap: 6px;
    margin-bottom: 8px;
    width: 100%;

    & .model {
      color: ${(props) => props.theme.accent};
    }

    & .rentalPrice {
      margin-left: auto;
      padding-right: 9px;
    }
  }
  & .secondaryInfoBlock {
    color: ${(props) => props.theme.secondary};
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
  }

  & .button {
    height: 44px;
    margin-top: auto;
    width: 100%;
  }

  & .favoriteButton {
    position: absolute;
    top: 5%;
    right: 10%;
    border: none;
    background-color: transparent;
  }
`;
