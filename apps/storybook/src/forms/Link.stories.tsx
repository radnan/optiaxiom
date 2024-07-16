import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@optiaxiom/react";

export default {
  component: Link,
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Google",
    external: true,
    href: "https://www.google.com/",
  },
};

export const Disabled: Story = {
  args: {
    children: "Google",
    disabled: true,
    external: true,
    href: "https://www.google.com/",
  },
};
