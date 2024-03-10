import { CarItem } from "../CarItem/CarItem";
import { Section } from "../Section/Section";
import { CarsListWrapper } from "./CarsList.styled";
import { useState } from "react";
import { CarModal } from "../CarModal/CarModal";

export const CarsList = ({ cars }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [page, setPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(12);

  const getPaginatedList = () => {
    if (cars.length <= carsPerPage) {
      return cars;
    }
    return cars.slice(page - 1, page * carsPerPage);
  };

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <CarsListWrapper>
      <Section className="carsListSection">
        <ul className="carsList">
          {getPaginatedList().map((car) => (
            <CarItem
              key={car.id}
              car={car}
              setModalData={setModalData}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </ul>
        {cars && cars.length > carsPerPage && (
          <button
            type="button"
            className="loadMoreButton"
            onClick={() => setCarsPerPage((prev) => prev + 12)}
          >
            Load more
          </button>
        )}
        {isModalOpen && (
          <CarModal car={modalData} setIsModalOpen={setIsModalOpen} />
        )}
      </Section>
    </CarsListWrapper>
  );
};
