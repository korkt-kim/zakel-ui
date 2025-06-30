import { Box as _Box, type BoxProps } from "@zakel-ui/core";
import type { ComponentType } from "react";

export const Box = (props: BoxProps) => {
  const BoxComponent = _Box as ComponentType<BoxProps>;
  
  return (
    <BoxComponent {...props} />
  );
};
