import { Heading as _Heading, type HeadingComponent } from "@zakel-ui/core";
import type { ComponentType } from "react";

export const Heading = (props: Parameters<HeadingComponent>[0]) => {
  const HeadingComponent = _Heading as ComponentType<Parameters<HeadingComponent>[0]>;

  return (
    <HeadingComponent {...props} />
  );
};
