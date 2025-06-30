import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';
import type { ButtonProps } from '@zakel-ui/core';
import type { ComponentPropsWithoutRef } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['primary', 'none'] },
    bg: { control: 'color' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'select', options: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
    padding: { control: 'text' },
    margin: { control: 'text' },
    borderRadius: { control: 'text' },
    border: { control: 'text' },
    display: { control: 'select', options: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'none'] },
    width: { control: 'text' },
    height: { control: 'text' },
    cursor: { control: 'select', options: ['pointer', 'default', 'not-allowed'] },
    boxShadow: { control: 'text' },
    textTransform: { control: 'select', options: ['none', 'capitalize', 'uppercase', 'lowercase'] },
    textDecoration: { control: 'select', options: ['none', 'underline', 'line-through'] },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<ButtonProps & ComponentPropsWithoutRef<'button'>>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Common: Story = {
  args: {
    children: 'This is Button',
  },
};
