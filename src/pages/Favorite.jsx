import { useEffect } from "react";
import { CarsList } from "../components/CarsList/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../redux/cars/selectors";
import { NotFoundCars } from "../components/NotFoundCars/NotFoundCars";

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, favoriteCars]);

  return (
    <div style={{ height: "100%" }}>
      {favoriteCars && favoriteCars.length > 0 && (
        <CarsList cars={favoriteCars} />
      )}
      {favoriteCars && favoriteCars.length === 0 && (
        <NotFoundCars text="There are no favorite cars" />
      )}
    </div>
  );
};

export default Favorite;
