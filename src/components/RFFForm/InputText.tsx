import { TextInput, TextInputProps } from "@mantine/core";
import { Field } from "react-final-form";
import { FieldValidator } from "final-form";

import { useInputToggle } from "../../hooks/use-input-toggle";

type PropsT = Omit<TextInputProps, "value" | "onChange" | "name"> & {
  name: string;
  withToggle?: boolean;
  disabledDescription?: string;
  validate?: FieldValidator<string>;
  parse?: (value: string) => string;
};

export const InputText = ({
  name,
  validate,
  type: typeIgnored,
  withToggle,
  disabledDescription,
  parse,
  ...restProps
}: PropsT) => {
  const withToggleProps = useInputToggle({
    withToggle,
    disabledDescription,
  });

  return (
    <Field
      parse={parse}
      name={name}
      validate={validate}
      validateFields={[]}
      data={{ ...withToggleProps }}
    >
      {(props) => (
        <TextInput
          error={
            props.meta.error ||
            (!props.meta.dirtySinceLastSubmit && props.meta.submitError)
          }
          name={props.input.name}
          value={withToggleProps.disabled ? "" : props.input.value}
          onChange={props.input.onChange}
          inputWrapperOrder={["label", "input", "description", "error"]}
          {...restProps}
          {...withToggleProps}
        />
      )}
    </Field>
  );
};
