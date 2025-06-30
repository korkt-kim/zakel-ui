import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';
import type { BoxProps } from '@zakel-ui/core';
import type { ComponentPropsWithoutRef } from 'react';
import { COMMON_ARG_TYPES } from '../consts';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Box',
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES
  },
} satisfies Meta<BoxProps & ComponentPropsWithoutRef<'div'>>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Common: Story = {
  args: {
    children: 'This is Box',
  },
};
