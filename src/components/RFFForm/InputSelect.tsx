import { Select, SelectProps } from "@mantine/core";
import { Field } from "react-final-form";
import { FieldValidator } from "final-form";

type PropsT = Omit<SelectProps, "value" | "onChange" | "name"> & {
  name: string;
  validate?: FieldValidator<string>;
};

export const InputSelect = ({
  name,
  validate,
  type: typeIgnored,
  ...restProps
}: PropsT) => {
  return (
    <Field name={name} validate={validate}>
      {(props) => (
        <Select
          error={
            props.meta.error ||
            (!props.meta.dirtySinceLastSubmit && props.meta.submitError)
          }
          name={props.input.name}
          value={props.input.value}
          onChange={props.input.onChange}
          placeholder="оберіть зі списку"
          {...restProps}
        />
      )}
    </Field>
  );
};
