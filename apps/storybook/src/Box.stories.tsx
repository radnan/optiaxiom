import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text } from "@optimizely-axiom/react";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    background: { dark: "brand.600", light: "brand.50" },
    borderRadius: "sm",
    children: <Text>Hello World!</Text>,
    margin: "lg",
    padding: "lg",
  },
};
