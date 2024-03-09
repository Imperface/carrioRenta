import styled from "styled-components";

export const FromSelectWrapper = styled.div`
  & .selectStylesCommon {
    &__control {
      background-color: ${(props) => props.theme.inputBg};
      border: none;
      cursor: pointer;
      height: 48px;
      border-radius: 20px;
      padding: 0 14px;
    }
    &__indicator-separator {
      display: none;
    }
    &__indicator {
      & svg {
        transition: all 0.5s;
        transform: rotate(0deg);
      }
    }
    &__control--menu-is-open {
      & .selectStylesCommon__indicator {
        & svg {
          transform: rotate(180deg);
        }
      }
    }

    &__option {
      color: ${(props) => props.theme.secondary};
      background-color: transparent;
      cursor: pointer;
      &--is-focused {
        color: ${(props) => props.theme.main};
        background-color: transparent;
      }
    }
  }
`;
