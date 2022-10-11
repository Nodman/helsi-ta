import { Form as RFFForm, FormProps } from "react-final-form";
type PropsT = FormProps & {
  className?: string;
};

export const Form = ({
  children,
  className,
  ...restProps
}: PropsT): React.ReactElement => {
  return (
    <RFFForm {...restProps}>
      {(props) => (
        <form onSubmit={props.handleSubmit} className={className}>
          {typeof children === "function" ? children(props) : children}
        </form>
      )}
    </RFFForm>
  );
};
