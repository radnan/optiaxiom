import { theme } from "@optiaxiom/globals";

import { groupStyle } from "../button-group/groupStyle";
import {
  recipe,
  type RecipeVariants,
  responsiveStyle,
  style,
} from "../vanilla-extract";

const marker = style({});

export const wrapper = recipe({
  base: [
    {
      flexDirection: "row",
      gap: "0",
    },
    style({
      backgroundColor: theme.colors["bg.default"],
      borderColor: theme.colors["border.default"],
      borderRadius: theme.borderRadius.md,
      borderWidth: "1px",
      color: theme.colors["fg.default"],

      selectors: {
        [`&:has(${marker}:focus):is([data-invalid])`]: {
          outline: `2px solid ${theme.colors["bg.error.light"]}`,
          outlineOffset: "1px",
        },
        [`&:has(${marker}:focus):not([data-invalid]):not([data-readonly])`]: {
          borderColor: theme.colors["border.accent"],
        },
        [`&:has(${marker}:focus):not([data-invalid])`]: {
          outline: `2px solid ${theme.colors["border.focus"]}`,
          outlineOffset: "1px",
        },
        [`&:has(${marker}:focus)`]: {
          zIndex: theme.zIndex["10"],
        },

        "&:hover": {
          borderColor: theme.colors["border.active"],
        },
        "&[data-invalid]": {
          borderColor: theme.colors["border.error"],
        },
        "&[data-readonly]": {
          borderColor: theme.colors["border.tertiary"],
        },

        "&[data-disabled]": {
          backgroundColor: theme.colors["bg.secondary"],
          borderColor: theme.colors["border.secondary"],
          color: theme.colors["fg.disabled"],
        },
        ...groupStyle(),
      },
    }),
  ],
});

export const input = recipe({
  base: [
    marker,
    {
      bg: "transparent",
      flex: "auto",
      w: "full",
    },
    style({
      /**
       * Explicitly use 16px on mobile because otherwise iOS will zoom in on
       * the page anytime the input is focused
       */
      fontSize: "16px",
      /**
       * Line-height was set to 22px to adjust for the 1px border on top and bottom
       */
      lineHeight: "22px",
      minWidth: "0",
      outline: "2px solid transparent",

      selectors: {
        "&::placeholder": {
          color: theme.colors["fg.tertiary"],
        },
        "&[data-disabled]::placeholder": {
          color: theme.colors["fg.disabled"],
        },
        "&[data-readonly]": {
          cursor: "default",
        },
      },
    }),
    responsiveStyle({
      sm: {
        fontSize: "14px",
      },
    }),
  ],

  variants: {
    size: {
      md: {
        px: "8",
        py: "4",
      },
      lg: {
        p: "8",
      },
      xl: [
        {
          p: "md",
        },
        responsiveStyle({
          sm: {
            fontSize: "16px",
          },
        }),
      ],
    },
  },
});

export type InputVariants = RecipeVariants<typeof input>;
