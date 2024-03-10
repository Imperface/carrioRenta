import { Section } from "../Section/Section";
import { WhyUsWrapper } from "./WhyUs.styled";

export const WhyUs = () => {
  return (
    <WhyUsWrapper>
      <Section
        className="whyUsSection"
        titleText="Why Us"
        titleClassName="title"
      >
        <div className="info">
          <p className="text">
            Each car is fully technically sound and undergoes regular scheduled
            technical inspections
          </p>
          <p className="text">We will provide a fully fueled car</p>
          <p className="text">
            The car will be issued clean, and upon return it is not necessary to
            wash it
          </p>
          <p className="text">
            If necessary, you will be provided with additional equipment, for
            example, a child seat or GPS navigator
          </p>
          <p className="text">
            24-hour technical support service will always be in touch, no matter
            where you are
          </p>
          <p className="text">
            When paying, you will be asked only for the amount specified in the
            contract - additional commissions and other hidden payments are
            excluded
          </p>
          <p className="text">All cars are insured</p>
          <p className="text">We try to keep prices below market</p>
        </div>
      </Section>
    </WhyUsWrapper>
  );
};
