import { StyledProps, PseudoProps } from "@zakel-ui/system";
import { ThemeSystem } from "./theme";

export const css = (_strings: TemplateStringsArray): string => {
  throw Error('Using the "css" in runtime is not supported.');
};

export const cx = (...classNames: (string | false | null | undefined)[]) =>
  classNames.filter((className) => Boolean(className)).join(" ");
