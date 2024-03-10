import { CarItem } from "../CarItem/CarItem";
import { Section } from "../Section/Section";
import { CarsListWrapper } from "./CarsList.styled";
import { useState } from "react";
import { CarModal } from "../CarModal/CarModal";

export const CarsList = ({ cars }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <CarsListWrapper>
      <Section className="carsListSection">
        <ul className="carsList">
          {cars.map((car) => (
            <CarItem
              key={car.id}
              car={car}
              setModalData={setModalData}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </ul>
        {isModalOpen && (
          <CarModal car={modalData} setIsModalOpen={setIsModalOpen} />
        )}
      </Section>
    </CarsListWrapper>
  );
};
