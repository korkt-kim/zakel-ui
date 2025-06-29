import { StyledProps, PseudoProps } from "@zakel-ui/system";
import React, { ReactNode } from "react";
import { As, ComponentWithAs, MergeWithAs, PropsOf } from "../types";
import { Box } from "../Box";
import { theme } from "@zakel-ui/sheet";
import { ComponentProps } from "../types";
import { defaultInputTag } from "./handler";
import { forwardRef } from "../forwardRef";

type InputProps = ComponentProps<"Input">;
type InputComponent<T extends As = "input"> = ComponentWithAs<T, InputProps>;

/**
 * The Input component inherits from the HTML input element and can be combined with Zakel UI's style properties for extensive customization.
 *
 * @see — http://zakel-ui.com/docs/Components/Input
 */
const Input: InputComponent = forwardRef(
  ({ as: Component = defaultInputTag, children, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- FIXME
    const variantStyle = props.variant
      ? theme.getVariants("Input")?.variants?.[props.variant]
      : {};
    return (
      <Box
        as={Component}
        ref={ref}
        {...variantStyle}
        {...props}
        children={children}
        IS_ZAKEL_DEFAULT
      />
    );
  },
);

export { Input, type InputComponent, InputProps };
