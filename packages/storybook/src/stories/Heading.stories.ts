import type { Meta, StoryObj } from '@storybook/react-vite';


import { Heading } from '@zakel-ui/core';
import { COMMON_ARG_TYPES } from '../consts';
import type { HeadingComponent } from '@zakel-ui/core';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    ...COMMON_ARG_TYPES
  },
} satisfies Meta<Parameters<HeadingComponent>[0]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {

  
  args: {
    as:'h3',
    color:"black",
    fontSize:"24px",
    children: 'Hello world',
  },
};


