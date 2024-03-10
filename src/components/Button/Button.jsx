import { Loader } from "../Loader/Loader";
import { ButtonWrapper } from "./Button.styled";

export const Button = ({
  className,
  type,
  text,
  isLoading,
  loaderColor = "black",
  onClick,
}) => {
  return (
    <ButtonWrapper
      type={type}
      disabled={isLoading}
      className={className}
      onClick={onClick}
    >
      {text}
      {isLoading && <Loader color={loaderColor} />}
    </ButtonWrapper>
  );
};
