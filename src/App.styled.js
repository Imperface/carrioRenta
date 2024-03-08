import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: "Manrope";
  font-weight: 400;
  color: white;
  min-height: 100vh;
  display: flex;
  color: ${(props) => props.theme.main};

  & a {
    color: inherit;
    text-decoration: inherit;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & img {
    width: 100%;
    display: block;
  }
`;
