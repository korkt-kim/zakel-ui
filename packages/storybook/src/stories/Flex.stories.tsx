import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '@zakel-ui/core';
import type { FlexProps } from '@zakel-ui/core';
import { COMMON_ARG_TYPES } from '../consts';
import { Box } from './Box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Flex',
  component: Flex,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: ({children, ...args}: FlexProps) => (
    // @TODO: fix this
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Flex {...args} >
      {children}
    </Flex>
  ) ,  
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    ...COMMON_ARG_TYPES
  },
} satisfies Meta<FlexProps>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    justify: 'center',
    alignItems: 'center',
    children: (
      <Box p={8} bg="blue" color="white">
        Hello world
      </Box>
    )
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Horizontal: Story = {
  args: {
    gap: '100px',
    children: (
      <>
        <div>item1</div>
        <div>item2</div>
      </>
    ),
  },
};


export const Vertical: Story = {
  args: {
    children: (
      <>
        <div>item1</div>
        <div>item2</div>
      </>
    ),
    flexDirection: 'column',
  },
};