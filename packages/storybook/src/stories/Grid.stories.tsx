import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from '@zakel-ui/core';
import { Grid } from '@zakel-ui/core';
import { COMMON_ARG_TYPES } from '../consts';
import type { GridProps } from '@zakel-ui/core';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  render: ({children, ...args}: GridProps) => (
    <Grid {...args} gap="12px">
      {children}
    </Grid>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  
  argTypes: {
    ...COMMON_ARG_TYPES
  },
} satisfies Meta<GridProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {

  args: {
    gridTemplateColumns:"repeat(2, 1fr)",
    gap:'6px', 
    children: (
      <>
        <Box bg="teal" height="80px" />
        <Box bg="teal" height="80px" />
        <Box bg="teal" height="80px" />
        <Box bg="teal" height="80px" />
      </>
    ),
  },
};


