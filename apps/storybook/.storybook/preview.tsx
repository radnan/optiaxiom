import type { Preview } from "@storybook/react";

import * as components from "@optiaxiom/react";
Object.assign(window, components);
require("raw-loader!../../../packages/react/dist/index.d.ts");

import isChromatic from "chromatic/isChromatic";

import "./preview.css";

components.TransitionGlobalConfig.skipAnimations = isChromatic();

export const loaders = isChromatic()
  ? [
      async () => ({
        fonts: await document.fonts.load("1rem InterVariable"),
      }),
    ]
  : [];

export const parameters = {
  controls: { sort: "requiredFirst" },
  layout: "centered",
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  useAxiomProvider: true,
};

export default {
  decorators: [
    (Story, context) =>
      context.parameters.useAxiomProvider ? (
        <components.AxiomProvider>
          <Story />
        </components.AxiomProvider>
      ) : (
        <Story />
      ),
  ],
} satisfies Preview;
