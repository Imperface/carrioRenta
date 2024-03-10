import { useDispatch, useSelector } from "react-redux";
import { CarSearch } from "../components/CarSearch/CarSearch";
import { useEffect, useState } from "react";
import { getAllCarsThunk } from "../redux/cars/operations";
import { Notify } from "notiflix";
import { selectCars, selectCarsIsLoading } from "../redux/cars/selectors";
import { CarsList } from "../components/CarsList/CarsList";
import { Loader } from "../components/Loader/Loader";
import { theme } from "../constants/theme";
import { NotFoundCars } from "../components/NotFoundCars/NotFoundCars";
const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectCarsIsLoading);

  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  useEffect(() => {
    const getAllCars = async () => {
      const { error } = await dispatch(getAllCarsThunk());

      if (error) {
        Notify.failure("Oops.. Something went wrong, please try again :(");
        return;
      }
    };
    getAllCars();
  }, [dispatch]);

  const getFilteredCars = () => {
    let filteredCars = cars;
    if (!filteredCars || !filteredCars.length) {
      return;
    }

    if (carBrand) {
      filteredCars = filteredCars.filter((car) => carBrand === car.make);
    }

    if (price) {
      filteredCars = filteredCars.filter(
        (car) =>
          Number(car.rentalPrice.match(/(\d+)/)[0]) <=
          Number(price.match(/(\d+)/)[0])
      );
    }

    if (mileageFrom) {
      filteredCars = filteredCars.filter(
        (car) => Number(mileageFrom) <= car.mileage
      );
    }
    if (mileageTo) {
      filteredCars = filteredCars.filter(
        (car) => Number(mileageTo) >= car.mileage
      );
    }
    const sortedCars = filteredCars.toSorted(
      (a, b) =>
        Number(b.rentalPrice.match(/(\d+)/)[0]) -
        Number(a.rentalPrice.match(/(\d+)/)[0])
    );

    return sortedCars;
  };

  const onFormSubmit = (values) => {
    const mileageFromValue = Number(values.mileageFrom);

    if (isNaN(mileageFromValue)) {
      Notify.failure("Mileage must be a number");
      return;
    }

    if (mileageFromValue < 0) {
      Notify.failure("Mileage cannot be less than zero");
      // перекупи посміялись
      return;
    }

    const mileageToValue = Number(values.mileageTo);

    if (isNaN(mileageToValue)) {
      Notify.failure("Mileage must be a number");
      return;
    }

    setCarBrand(values.brand);
    setPrice(values.price);
    setMileageFrom(values.mileageFrom);
    setMileageTo(values.mileageTo);
  };

  return (
    <div>
      {isLoading && <Loader color={theme.main} />}

      <CarSearch onFormSubmit={onFormSubmit} />
      {cars && cars.length > 0 && getFilteredCars().length > 0 && (
        <CarsList cars={getFilteredCars()} />
      )}
      {cars && cars.length > 0 && getFilteredCars().length === 0 && (
        <NotFoundCars text="Nothing was found for your request" />
      )}
    </div>
  );
};

export default Catalog;
