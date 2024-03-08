import { Container } from "components/Container/Container";

import { SectionWrapper } from "./Section.styled";

export const Section = ({ className, titleText, titleClassName, children }) => {
  return (
    <SectionWrapper className={className}>
      <Container>
        {titleText && <h2 className={titleClassName}>{titleText}</h2>}
        {children}
      </Container>
    </SectionWrapper>
  );
};
