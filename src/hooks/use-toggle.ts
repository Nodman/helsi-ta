import { useState, useCallback } from "react";

export const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const toggleState = useCallback(() => {
    setState((prevValue) => !prevValue);
  }, [setState]);

  return [state, toggleState] as const;
};
