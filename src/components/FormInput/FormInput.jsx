import { FormInputGroup, Input, Label } from "./FormInput.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <Input {...otherProps} />
      {label && (
        <Label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}>
          {label}
        </Label>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
