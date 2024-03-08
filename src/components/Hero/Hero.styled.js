import styled from "styled-components";

export const HeroWrapper = styled.div`
  font-size: 20px;

  & .heroSection {
    padding-top: 100px;
    & .title {
      text-align: center;
      padding: 0 0 30px;
    }
  }

  & .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
    &ImgWrapper {
      width: 620px;
    }
    &Img {
    }
    &Text {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
    }
    & .letsStart {
      background-color: ${(props) => props.theme.accent};
      max-width: 200px;
      text-align: center;
      padding: 10px 10px;
      border-radius: 20px;
      color: ${(props) => props.theme.mainRevers};
      transition: all 0.5s;

      &:hover {
        background-color: ${(props) => props.theme.accentHover};
      }
    }
  }
`;
