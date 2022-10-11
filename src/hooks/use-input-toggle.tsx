import { Switch } from "@mantine/core";
import { useMemo } from "react";
import { useToggle } from "./use-toggle";

type PropsT = {
  withToggle?: boolean;
  disabledDescription?: string;
};

type ReturnT = {
  description?: string | React.ReactNode;
  disabled?: boolean;
  rightSection?: React.ReactElement;
  withAsterisk?: boolean;
};

const EMPTY = {};

export const useInputToggle = ({
  withToggle,
  disabledDescription,
}: PropsT): ReturnT => {
  const [enabled, toggleEnabled] = useToggle(true);

  return useMemo(() => {
    if (!withToggle) {
      return EMPTY;
    }

    let resultProps = {
      rightSection: (
        <Switch
          size="xs"
          mr="xs"
          checked={enabled}
          onChange={() => toggleEnabled()}
        />
      ),
    };

    if (!enabled) {
      Object.assign(
        resultProps,
        {
          disabled: true,
          description: disabledDescription
        }
      );
    }

    return resultProps;
  }, [
    enabled,
    toggleEnabled,
    withToggle,
    disabledDescription,
  ]);
};
