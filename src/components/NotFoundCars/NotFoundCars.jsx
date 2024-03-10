import { NotFoundCarsWrapper } from "./NotFoundCars.styled";
import { IoCarSportOutline } from "react-icons/io5";

export const NotFoundCars = ({ text }) => {
  return (
    <NotFoundCarsWrapper>
      <div>
        <IoCarSportOutline size={400} />
        <p>{text}</p>
      </div>
    </NotFoundCarsWrapper>
  );
};
