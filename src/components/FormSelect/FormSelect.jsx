import Select from "react-select";
import { FromSelectWrapper } from "./FormSelect.styled";

export const FormSelect = ({
  options,
  field,
  form,
  classNamePrefix,
  placeholder,
}) => {
  return (
    <FromSelectWrapper>
      <Select
        name={field.name}
        classNamePrefix={` ${classNamePrefix} selectStylesCommon`}
        placeholder={placeholder}
        options={options}
        value={options.find((option) => option.value === field.value)}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
      />
    </FromSelectWrapper>
  );
};
