import { Notify } from "notiflix";
import { CarItemWrapper } from "./CarItem.styled";
import { Button } from "../Button/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { theme } from "../../constants/theme";
import { selectFavoriteCars } from "../../redux/cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import defaultCar from "../../image/defaultCar.jpeg";
import { addToFavorite, removeFromFavorite } from "../../redux/cars/slices";

export const CarItem = ({ car, setIsModalOpen, setModalData }) => {
  const favotiteCars = useSelector(selectFavoriteCars);

  const dispatch = useDispatch();

  // looking for car in favorite
  const isFavoriteCar = (id) =>
    favotiteCars.find((favoriteCar) => favoriteCar.id === id);

  const onFavoriteButtonClick = async (car) => {
    if (isFavoriteCar(car.id)) {
      // if car is favorite, dispatch removeFromFavorite action
      const { error } = await dispatch(removeFromFavorite(car.id));

      // if error, show notify failure
      if (error) {
        Notify.failure("Oops.. Something went wrong, please try again :(");
        return;
      }

      Notify.success("Car removed from favorite");
      return;
    }

    // if car is not favorite, dispatch addToFavorite action
    const { error } = await dispatch(addToFavorite(car));

    // if error, show notify failure
    if (error) {
      Notify.failure("Oops.. Something went wrong, please try again :(");
      return;
    }

    Notify.success("Car added to favorite");
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

    return (
      <div className="secondaryInfoBlock">
        <span>{city} | </span>
        <span>{country} | </span>
        <span>{car.rentalCompany} |</span>
        <span>{premium} | </span>
        <span>{car.type} | </span>
        <span>{car.model} | </span>
        <span>{car.id} | </span>
        <span>{car.accessories[0]}</span>
      </div>
    );
  };

  return (
    <CarItemWrapper>
      <div className="imageBlock">
        <img
          loading="lazy"
          src={car.img || car.photoLink || defaultCar}
          alt="car image"
        />
      </div>
      <div className="mainInfoBlock">
        <span className="make">{car.make} </span>
        <span className="model">{car.model}, </span>
        <span className="year">{car.year}</span>
        <span className="rentalPrice">{car.rentalPrice}</span>
      </div>

      {getSecondaryInfo()}

      <Button
        type="button"
        text="Learn more"
        className="button"
        onClick={() => {
          setModalData(car);
          setIsModalOpen(true);
        }}
      />
      <button
        type="button"
        className="favoriteButton"
        onClick={() => onFavoriteButtonClick(car)}
      >
        {isFavoriteCar(car.id) ? (
          <FaHeart color="red" size="18" />
        ) : (
          <FaRegHeart color={theme.mainRevers} size="18" />
        )}
      </button>
    </CarItemWrapper>
  );
};
