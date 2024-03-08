import { ContainerWrapper } from "./Container.styled";

export const Container = ({ className, children }) => (
  <ContainerWrapper className={className}>{children}</ContainerWrapper>
);
