import { useMemo } from "react";

import { required } from "../../utils/form-validators";

import { InputSelect } from "./InputSelect";
import { InputText } from "./InputText";
import { InputDate } from "./InputDate";
import { FieldValidator } from "final-form";

type CommonPropsT = {
  label: string;
  withAsterisk?: boolean;
  placeholder?: string;
};

type DateInputConfigT = {
  type: "date";
  validate?: FieldValidator<Date> | FieldValidator<Date>[];
} & CommonPropsT;

type TextInputConfigT = {
  type: "text";
  withToggle?: boolean;
  disabledDescription?: string;
  validate?: FieldValidator<string> | FieldValidator<string>[];
  parse?: (value: string) => string;
} & CommonPropsT;

type SelectInputConfigT = {
  type: "select";
  validate?: FieldValidator<string> | FieldValidator<string>[];
  data: { value: string; label: string }[];
} & CommonPropsT;

export type FormConfigT = Record<
  string,
  TextInputConfigT | SelectInputConfigT | DateInputConfigT
>;

function composeValidators<V extends unknown>(options: {
  withAsterisk?: boolean;
  withToggle?: boolean;
  validate?: FieldValidator<V> | (FieldValidator<V> | void)[] | void;
}): FieldValidator<V> {
  return (value, allValuesIgnored, meta) => {
    if (!meta?.modified || meta?.data?.disabled) {
      return;
    }

    try {
      [options.withAsterisk ? required : null, ...[options.validate]]
        .flat()
        .forEach((item) => {
          if (!item) {
            return;
          }

          const result = item(value, allValuesIgnored, meta);
          if (result) {
            throw new Error(result);
          }
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }

      return "unknown error";
    }
  };
}

export const useFormConfig = (config: FormConfigT) => {
  const formComponentsByConfig = useMemo(() => {
    // NOTE conflict between eslint and TS
    // eslint-disable-next-line array-callback-return
    return Object.entries(config).map(([key, value]) => {
      switch (value.type) {
        case "text": {
          const validate = composeValidators(value);

          const Component = (
            props: Omit<Parameters<typeof InputText>[number], "name">
          ): React.ReactElement => {
            return (
              <InputText {...props} {...value} name={key} validate={validate} />
            );
          };

          return { key, Component, validate };
        }

        case "date": {
          const validate = composeValidators(value);

          const Component = (
            props: Omit<Parameters<typeof InputDate>[number], "name">
          ): React.ReactElement => (
            <InputDate {...props} {...value} name={key} validate={validate} />
          );

          return { key, Component, validate };
        }

        case "select": {
          const validate = composeValidators(value);

          const Component = (
            props: Omit<Parameters<typeof InputSelect>[number], "name" | "data">
          ): React.ReactElement => (
            <InputSelect {...props} {...value} name={key} validate={validate} />
          );

          return { key, Component, validate };
        }
      }
    });
  }, [config]);

  return formComponentsByConfig;
};
