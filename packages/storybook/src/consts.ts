import type { ArgTypes } from "@storybook/react-vite";

export const COMMON_ARG_TYPES:Partial<ArgTypes<Record<string, unknown>>> = {
  bg: { control: 'color' },
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  fontSize: { control: 'text' },
  fontWeight: { control: 'select', options: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
  padding: { control: 'text' },
  margin: { control: 'text' },
  borderRadius: { control: 'text' },
  border: { control: 'text' },
}