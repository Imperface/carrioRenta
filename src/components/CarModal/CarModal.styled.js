import styled from "styled-components";

export const CarModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.modalOverlay};
  cursor: pointer;

  & .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 541px;
    min-height: 600px;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.mainRevers};
    z-index: 3;
    cursor: default;

    padding: 40px;
  }

  & .iconCross {
    border: none;
    background-color: transparent;
    position: absolute;
    right: 3%;
    top: 3%;
  }

  & .imageBlock {
    width: 461px;
    height: 248px;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 14px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .mainInfoBlock {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    & .make {
      color: ${(props) => props.theme.accent};
    }
  }

  & .secondaryInfoBlock {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 14px;
    color: ${(props) => props.theme.secondary};
  }

  & .descriptionBlock {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  & .featuresBlock {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 14px;
    color: ${(props) => props.theme.secondary};
  }

  & .accessories {
    margin-bottom: 4px;
  }

  & .conditionBlock {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 22px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 31px;
  }

  & .mileage,
  .price,
  .age {
    color: ${(props) => props.theme.accent};
  }

  & .rentalLink {
    border-radius: 20px;
    display: inline-block;
    background-color: ${(props) => props.theme.accent};
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.mainRevers};

    padding: 12px 50px;
  }
`;
