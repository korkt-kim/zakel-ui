import { Text as _Text, type TextProps } from "@zakel-ui/core";
import type { ComponentType } from "react";

// @MEMO: 라이브러리에서 HeadingProps 잘못된것 확인
export const Text = (props: TextProps) => {
  const TextComponent = _Text as ComponentType<TextProps>;

  return (
    <TextComponent {...props} />
  );
};
