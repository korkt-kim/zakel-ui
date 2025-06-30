import { Flex as _Flex, type FlexProps } from "@zakel-ui/core";
import type { ComponentType } from "react";

export const Flex = (props: FlexProps) => {
  const FlexComponent = _Flex as ComponentType<FlexProps>;

  return (
    <FlexComponent {...props} />
  );
};
