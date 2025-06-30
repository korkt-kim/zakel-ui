import type { Meta, StoryObj } from '@storybook/react-vite';


import { Text } from './Text';
import { COMMON_ARG_TYPES } from '../consts';
import type { TextProps } from '@zakel-ui/core';

const meta = {
  title: 'Example/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    ...COMMON_ARG_TYPES
  },
} satisfies Meta<TextProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {

  
  args: {
    color:"black",
    fontSize:"24px",
    children: 'Hello world',
  },
};


