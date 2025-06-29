import { StyledProps, PseudoProps } from "@zakel-ui/system";
import { theme } from "@zakel-ui/sheet";
import React, { ReactNode } from "react";
import {
  As,
  ComponentWithAs,
  MergeWithAs,
  PropsOf,
  ComponentProps,
} from "../types";
import { Box } from "../Box";
import { defaultVStackTag } from "./handler";
import { forwardRef } from "../forwardRef";

type VStackProps = ComponentProps<"VStack">;

type VStackComponent<T extends As = "div"> = ComponentWithAs<T, VStackProps>;

/**
 * VStack is a Box component with `display="flex"` and `flex-direction: column` set by default. It makes it easier to layout and align child components in a vertical direction. It is a fundamental layout component in Zakel UI.
 *
 * @see — http://zakel-ui.com/docs/Components/VStack
 */
const VStack: VStackComponent = forwardRef(
  ({ as: Component = defaultVStackTag, children, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- FIXME
    const variant = props.variant
      ? theme.getVariants("VStack")?.variants?.[props.variant]
      : {};
    return (
      <Box
        as={Component}
        ref={ref}
        {...variant}
        {...props}
        children={children}
        IS_ZAKEL_DEFAULT
      />
    );
  },
);

export { VStack, type VStackComponent, VStackProps };
