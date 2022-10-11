import "dayjs/locale/uk";
import { DatePicker, DatePickerProps } from "@mantine/dates";
import { Field } from "react-final-form";
import { FieldValidator } from "final-form";

type PropsT = Omit<DatePickerProps, "value" | "onChange" | "name"> & {
  name: string;
  validate?: FieldValidator<Date>;
};

export const InputDate = ({
  name,
  validate,
  type: typeIgnored,
  ...restProps
}: PropsT) => {
  return (
    <Field<Date> name={name} validate={validate} validateFields={[]}>
      {(props) => (
        <DatePicker
          placeholder="оберіть дату"
          locale="uk"
          error={
            props.meta.error ||
            (!props.meta.dirtySinceLastSubmit && props.meta.submitError)
          }
          name={props.input.name}
          value={props.input.value}
          onChange={props.input.onChange}
          {...restProps}
        />
      )}
    </Field>
  );
};
