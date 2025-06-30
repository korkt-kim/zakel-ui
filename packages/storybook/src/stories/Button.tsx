import { Button as _Button, type ButtonProps } from "@zakel-ui/core";
import type { ComponentType } from "react";

export const Button = (props: ButtonProps) => {
  const ButtonComponent = _Button as ComponentType<ButtonProps>;
  
  return (
    <ButtonComponent {...props} />
  );
};
