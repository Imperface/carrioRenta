import { Notify } from "notiflix";
import { CarItemWrapper } from "./CarItem.styled";
import { Button } from "../Button/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { theme } from "../../constants/theme";

export const CarItem = ({ car }) => {
  const addToFavorite = (car) => {};

  const isFavoriteCar = (id) => {
    return true;
  };

  const getSecondaryInfo = () => {
    // check is car not empty obj
    if (!Object.keys(car).length) {
      Notify.failure("Oops.. Something went wrong, please try again :(");
      return;
    }

    // split data from backend
    const [street, city, country] = car.address.split(", ");

    const premium = "Premium";
    const suv = "Suv";

    return (
      <div className="secondaryInfoBlock">
        <span>{city} | </span>
        <span>{country} | </span>
        <span>{car.rentalCompany} |</span>
        <span>{premium} | </span>
        <span>{suv} | </span>
        <span>{car.model} | </span>
        <span>{car.id} | </span>
        <span>{car.accessories[0]}</span>
      </div>
    );
  };
  return (
    <CarItemWrapper>
      <div className="imageBlock">
        <img src={car.img || car.photoLink} alt="car image" />
      </div>
      <div className="mainInfoBlock">
        <span className="make">{car.make} </span>
        <span className="model">{car.model}, </span>
        <span className="year">{car.year}</span>
        <span className="rentalPrice">{car.rentalPrice}</span>
      </div>

      {getSecondaryInfo()}

      <Button type="button" text="Learn more" className="button" />
      <button type="button" className="favoriteButton">
        {isFavoriteCar() ? (
          <FaHeart color="red" size="18" />
        ) : (
          <FaRegHeart color={theme.mainRevers} size="18" />
        )}
      </button>
      <div className="favorite"></div>
    </CarItemWrapper>
  );
};
// {
// "id": 9582,
// "year": 2008,
// "make": "Buick",
// "model": "Enclave",
// "type": "SUV",
// "img": "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
// "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
// "fuelConsumption": "10.5",
// "engineSize": "3.6L V6",
// "accessories": [
// "Leather seats",
// "Panoramic sunroof",
// "Premium audio system"
// ],
// "functionalities": [
// "Power liftgate",
// "Remote start",
// "Blind-spot monitoring"
// ],
// "rentalPrice": "$40",
// "rentalCompany": "Luxury Car Rentals",
// "address": "123 Example Street, Kiev, Ukraine",
// "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
// "mileage": 5858
// },
