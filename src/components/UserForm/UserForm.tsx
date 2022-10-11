import { Button, Title } from "@mantine/core";
import clsx from "clsx";
import { FormApi } from "final-form";
import { useMemo } from "react";

import { chunk } from "../../utils/chunk";

import { Form } from "../RFFForm/Form";
import { useFormConfig } from "../RFFForm/useFormConfig";

import { userFormConfig } from "./config";

import styles from "./UserForm.module.css";

export const UserForm = (): React.ReactElement => {
  const formComponents = useFormConfig(userFormConfig);

  const [basicInfoFields, idInfoFields] = useMemo(
    () => chunk(formComponents, [12, 6]),
    [formComponents]
  );

  const onSubmit = (
    fields: Record<string, any>,
    formApi: FormApi<Record<string, any>>
  ) => {
    const errors = formComponents.reduce((acc, item) => {
      const { key, validate } = item;
      const state = formApi.getFieldState(key);
      const value = fields[key];

      const error = validate(
        value,
        fields,
        state ? { ...state, modified: true } : state
      );

      if (error) {
        return {
          ...acc,
          [key]: error,
        };
      }

      return acc;
    }, {} as Record<string, string>);

    return Object.keys(errors).length > 0 ? errors : undefined;
  };

  return (
    <Form onSubmit={onSubmit} className={styles.section}>
      <div className={clsx(styles.section, styles.basicInfo)}>
        <Title order={3}>Дані пацієнта</Title>
        <div className={styles.row}>
          {basicInfoFields.map((item) => {
            const { key, Component } = item;

            return <Component key={key} className={styles.input} />;
          })}
        </div>
      </div>

      <div className={styles.section}>
        <Title order={3}>Документ, що посвідчує особу</Title>
        <div className={styles.row}>
          {idInfoFields.map((item) => {
            const { key, Component } = item;

            return <Component key={key} className={styles.input} />;
          })}
        </div>
      </div>

      <Button className={styles.submitButton} type="submit">
        Зберегти
      </Button>
    </Form>
  );
};
