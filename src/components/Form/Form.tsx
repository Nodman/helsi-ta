import { TextInput } from "@mantine/core";

import styles from "./Form.module.css";

export const Form = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <TextInput className={styles.input} />
        <TextInput className={styles.input} />
        <TextInput className={styles.input} />
      </div>
      <div className={styles.row}>
        <TextInput className={styles.input} />
        <TextInput className={styles.input} />
        <TextInput className={styles.input} />
      </div>
    </div>
  );
};
