import { CarItem } from "../CarItem/CarItem";
import { Section } from "../Section/Section";
import { CarsListWrapper } from "./CarsList.styled";
import { nanoid } from "@reduxjs/toolkit";

export const CarsList = ({ cars }) => {
  return (
    <CarsListWrapper>
      <Section className="carsListSection">
        <ul className="carsList">
          {cars.map((car) => (
            <CarItem key={nanoid()} car={car} />
          ))}
        </ul>
      </Section>
    </CarsListWrapper>
  );
};
