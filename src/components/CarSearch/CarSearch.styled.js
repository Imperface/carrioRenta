import styled from "styled-components";

export const CarSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  & .carSearchSection {
    padding-top: 100px;
  }
  & .form {
    display: flex;
    column-gap: 18px;
  }
  & label {
    position: relative;
    & .text {
      display: block;
      margin-bottom: 8px;
    }
    color: ${(props) => props.theme.secondary};
  }

  & .carBrand {
    width: 224px;

    & .selectStylesCommon__placeholder {
      color: ${(props) => props.theme.main};
    }
  }

  & .price {
    position: relative;
    width: 125px;
    & .field {
    }
    & .selectStylesCommon__control {
      padding-left: 25px;
      &::before {
        color: ${(props) => props.theme.main};

        content: "To";
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
      }
      &::after {
        content: "$";
        color: ${(props) => props.theme.main};
        z-index: 1;
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
      }
    }
  }

  & .carMileage {
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    & .text {
      width: 100%;
      color: ${(props) => props.theme.secondary};

      margin-bottom: 8px;
    }

    & .label {
      width: 160px;
      display: flex;
      height: 48px;

      &.from {
        border-right: 1px solid ${(props) => props.theme.inputBrd};

        & .field {
          border: 1px solid transparent;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          padding-left: 70px;
        }

        & .field:focus {
          border: 1px solid ${(props) => props.theme.accent};
        }
      }

      &.from::before {
        content: "From";
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        color: ${(props) => props.theme.main};
      }

      &.to {
        & .field {
          border: 1px solid transparent;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          padding-left: 50px;
        }
        & .field:focus {
          border: 1px solid ${(props) => props.theme.accent};
        }
      }

      &.to::before {
        content: "To";
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        color: ${(props) => props.theme.main};
      }
      & .field {
        width: 100%;
        background-color: ${(props) => props.theme.inputBg};
        outline: none;
        transition: border-color 0.5s;
      }
    }
  }
  & .submitButton {
    align-self: flex-end;
  }
`;
