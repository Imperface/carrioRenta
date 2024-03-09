import { useDispatch, useSelector } from "react-redux";
import { CarSearch } from "../components/CarSearch/CarSearch";
import { useEffect } from "react";
import { getAllCarsThunk } from "../redux/cars/operations";
import { Notify } from "notiflix";
import { selectCars } from "../redux/cars/selectors";
import { CarsList } from "../components/CarsList/CarsList";
const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    const getCarsList = async () => {
      const { error, payload } = await dispatch(getAllCarsThunk());

      if (error) {
        Notify.failure("Oops.. Something went wrong, please try again :(");
        return;
      }
    };
    getCarsList();
  }, [dispatch]);

  return (
    <div>
      <CarSearch />
      {cars && cars.length && <CarsList cars={cars} />}
    </div>
  );
};

export default Catalog;
