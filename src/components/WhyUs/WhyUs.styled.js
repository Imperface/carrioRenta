import styled from "styled-components";

export const WhyUsWrapper = styled.div`
  font-size: 20px;

  & .whyUsSection {
    padding: 100px 0;
    & .title {
      text-align: center;
      padding: 0 0 30px;
    }
  }

  & .info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    & .text {
      width: 45%;
    }
  }
`;
