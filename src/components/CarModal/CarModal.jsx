import { useEffect } from "react";
import { CarModalWrapper } from "./CarModal.styled";
import { RxCross2 } from "react-icons/rx";
import defaultCar from "../../image/defaultCar.jpeg";
import { Notify } from "notiflix";

export const CarModal = ({ car, setIsModalOpen }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsModalOpen]);

  const onOverlayClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsModalOpen(false);
  };

  const getSecondaryInfo = () => {
    // check is car not empty obj
    if (!Object.keys(car).length) {
      Notify.failure("Oops.. Something went wrong, please try again :(");
      return;
    }
    // split data from backend
    const [street, city, country] = car.address.split(", ");

    return (
      <div className="secondaryInfoBlock">
        <p>
          {city} | {country} | Id: {car.id} | Year: {car.year} | Type:{" "}
          {car.type}
        </p>
        <p>
          Fuel Consumption: {car.fuelConsumption} | Engine Size {car.engineSize}
        </p>
      </div>
    );
  };

  const getRentalConditions = () => {
    const [minAge, license, security] = car.rentalConditions.split("\n");

    const age = minAge.match(/(\d+)/)[0];
    const price = car.rentalPrice.match(/(\d+)/)[0];

    return (
      <div className="conditionBlock">
        <span>
          Minimum age: <span className="age">{age}</span>
        </span>
        <span>{license}</span>
        <span>{security}</span>
        <span>
          Mileage: <span className="mileage">{car.mileage}</span>
        </span>
        <span>
          Price: <span className="price">{price}$</span>
        </span>
      </div>
    );
  };
  return (
    <CarModalWrapper onClick={onOverlayClick}>
      <div className="modal">
        <button className="iconCross" onClick={() => setIsModalOpen(false)}>
          <RxCross2 size={24} />
        </button>
        <div className="imageBlock">
          <img src={car.img || car.photoLink || defaultCar} alt="car image" />
        </div>
        <div className="mainInfoBlock">
          {car.model} <span className="make">{car.make}</span>, {car.year}
        </div>
        {getSecondaryInfo()}
        <div className="descriptionBlock">{car.description}</div>
        <div className="featuresBlock">
          <div className="accessories">
            {car.accessories[0] + " | "}
            {car.accessories[1] + " | "}
            {car.accessories[2]}
          </div>

          <div className="functionalities">
            {car.functionalities[0] + " | "}
            {car.functionalities[1] + " | "}
            {car.functionalities[2]}
          </div>
        </div>
        {getRentalConditions()}

        <a
          className="rentalLink"
          href="tel:+380730000000"
          rel="nofollow noopener"
          target="_blank"
        >
          Rental car
        </a>
      </div>
    </CarModalWrapper>
  );
};
