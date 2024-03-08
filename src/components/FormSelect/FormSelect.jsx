import Select from "react-select";

export const FormSelect = ({
  options,
  field,
  form,
  classNamePrefix,
  placeholder,
}) => {
  return (
    <Select
      name="brand"
      classNamePrefix={classNamePrefix}
      placeholder={placeholder}
      options={options}
      value={options.find((option) => option.value === field.value)}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
    />
  );
};
