import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 14px 44px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.mainRevers};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
  }
  &:disabled {
    background-color: ${(props) => props.theme.accent};
    opacity: 0.5;
    cursor: wait;
  }
`;
