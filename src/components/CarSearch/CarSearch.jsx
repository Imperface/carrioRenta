import { Section } from "../Section/Section";
import { CarSearchWrapper } from "./CarSearch.styled";
import { BRANDS } from "../../constants/brands";
import { PRICES } from "../../constants/prices";
import { Field, Form, Formik } from "formik";
import { FormSelect } from "../FormSelect/FormSelect";
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
  };
  const onFormSubmit = (values) => {
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
          <Form>
            <label className="label">
              Car brand
              <Field
                name="brand"
                component={FormSelect}
                options={getBrandsOptions()}
                classNamePrefix="selectBrand"
                placeholder="Select Brand"
              />
            </label>
            <label className="label">
              Price/ 1 hour
              <Field
                name="price"
                component={FormSelect}
                options={getPricesOptions()}
                classNamePrefix="selectPrice"
                placeholder="Select Price"
              />
            </label>
            <label className="label">
              Car mileage / km
              <Field name="mileageFrom" placeholder="From" type="number" />
            </label>
            <button type="submit">Submit</button>
            {/* <label className="label">
              Car brand
              <Select
                name="brand"
                classNamePrefix="selectBrand"
                placeholder="Select brand"
                options={getBrandOptions()}
              />
            </label>
            <label className="label">
              Car brand
              <input></input>
            </label> */}
          </Form>
        </Formik>
      </Section>
    </CarSearchWrapper>
  );
};
