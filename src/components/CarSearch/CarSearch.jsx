import { Section } from "../Section/Section";
import { CarSearchWrapper } from "./CarSearch.styled";
import { BRANDS } from "../../constants/brands";
import { PRICES } from "../../constants/prices";
import { Field, Form, Formik } from "formik";
import { FormSelect } from "../FormSelect/FormSelect";
import { Button } from "../Button/Button";
import { theme } from "../../constants/theme";

export const CarSearch = ({ onFormSubmit }) => {
  const getBrandsOptions = () => {
    return BRANDS.map((brand) => ({ value: brand, label: brand }));
  };
  const getPricesOptions = () => {
    return PRICES.map((price) => ({
      value: price,
      label: Number(price.match(/(\d+)/)[0]),
    }));
  };

  const initialValues = {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  };

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
                placeholder="Enter the text"
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
                placeholder=""
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
