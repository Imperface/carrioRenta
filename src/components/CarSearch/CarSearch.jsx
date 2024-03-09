import { Section } from "../Section/Section";
import { CarSearchWrapper } from "./CarSearch.styled";
import { BRANDS } from "../../constants/brands";
import { PRICES } from "../../constants/prices";
import { Field, Form, Formik } from "formik";
import { FormSelect } from "../FormSelect/FormSelect";
import { Button } from "../Button/Button";
import { theme } from "../../constants/theme";
import { Notify } from "notiflix";

export const CarSearch = () => {
  const getBrandsOptions = () => {
    return BRANDS.map((brand) => ({ value: brand, label: brand }));
  };
  const getPricesOptions = () => {
    return PRICES.map((price) => ({ value: price, label: price }));
  };

  const initialValues = {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
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

    console.log(mileageFromValue);

    // if (values.mileageFrom && Number(typeof values.mileageFrom) !== "number") {
    //   const a = 5;
    //   console.log(a);
    // }

    // if (Number(values.mileageFrom) < 0) {
    //
    // }

    console.log(values);
  };
  // const a = async () => {
  //   const b = await axios.get(
  //     "https://656920d8de53105b0dd6ba92.mockapi.io/carrioRenta"
  //   );
  //   const c = b.data.map((item) => item.rentalPrice);
  //   console.log(c);
  // };
  // a();

  return (
    <CarSearchWrapper>
      <Section className="carSearchSection">
        <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
          <Form className="form">
            <label className="label carBrand">
              <span className="text">Car brand</span>
              <Field
                name="brand"
                component={FormSelect}
                options={getBrandsOptions()}
                classNamePrefix="selectBrand"
                placeholder="Select Brand"
                className="field"
              />
            </label>

            <label className="label price">
              <span className="text">Price/ 1 hour</span>
              <Field
                name="price"
                component={FormSelect}
                options={getPricesOptions()}
                classNamePrefix="selectPrice"
                placeholder=" $"
                className="field"
              />
            </label>

            <div className="carMileage">
              <span className="text">Car mileage / km</span>
              <label className="label from">
                <Field
                  name="mileageFrom"
                  type="text"
                  className="field fromField"
                />
              </label>
              <label className="label to">
                <Field name="mileageTo" type="text" className="field toField" />
              </label>
            </div>
            <Button
              text="Search"
              type="submit"
              className="submitButton"
              // isLoading={true}
              loaderColor={theme.accentHover}
            />
          </Form>
        </Formik>
      </Section>
    </CarSearchWrapper>
  );
};
