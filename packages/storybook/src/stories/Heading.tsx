import { Heading as _Heading, type HeadingComponent } from "@zakel-ui/core";
import type { ComponentType } from "react";

// @MEMO: 라이브러리에서 HeadingProps 잘못된것 확인
export const Heading = (props: Parameters<HeadingComponent>[0]) => {
  const HeadingComponent = _Heading as ComponentType<Parameters<HeadingComponent>[0]>;

  return (
    <HeadingComponent {...props} />
  );
};
