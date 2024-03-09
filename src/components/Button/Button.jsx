import { Loader } from "../Loader/Loader";
import { ButtonWrapper } from "./Button.styled";

export const Button = ({
  className,
  type,
  text,
  isLoading,
  loaderColor = "black",
}) => {
  return (
    <ButtonWrapper type={type} disabled={isLoading} className={className}>
      {text}
      {isLoading && <Loader color={loaderColor} />}
    </ButtonWrapper>
  );
};
