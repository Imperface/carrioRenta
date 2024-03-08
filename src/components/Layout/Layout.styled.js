import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  & main {
    flex-grow: 1;
  }
`;
