import { theme } from "../styles";
import { recipe, style } from "../vanilla-extract";

export const wrapper = recipe({
  base: [
    {
      alignItems: "start",
      flexDirection: "row",
      gap: "xs",
    },
  ],
});

export const iconC = recipe({
  base: [
    style({
      display: "none",
      selectors: {
        '[data-state="checked"] &': {
          display: "block",
        },
      },
    }),
  ],
});

export const iconUC = recipe({
  base: [
    style({
      display: "none",
      selectors: {
        '[data-state="unchecked"] &': {
          display: "block",
        },
      },
    }),
  ],
});

export const iconI = recipe({
  base: [
    style({
      display: "none",
      selectors: {
        '[data-state="indeterminate"] &': {
          display: "block",
        },
      },
    }),
  ],
});

export const indicator = recipe({
  base: [
    {
      alignItems: "center",
      color: "black",
      display: "flex",
      h: "full",
      justifyContent: "center",
      rounded: "xs",
    },
    style({
      background: theme.colors["bg.brand.solid"],
      selectors: {
        "&:hover": {
          background: theme.colors["bg.brand.solid.hover"],
        },
        '[data-disabled="true"] &': {
          background: theme.colors["neutral.150"],
        },
      },
    }),
  ],
});

export const indicatorWrapper = recipe({
  base: [
    {
      border: "1",
      h: "16",
      justifyContent: "center",
      rounded: "xs",
      w: "16",
    },
    style({
      borderColor: theme.colors["neutral.500"],
      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${theme.colors["brand.300"]}`,
          outlineOffset: "1px",
        },
        "&:hover": {
          border: `1px solid ${theme.colors["fg.tertiary"]}`,
        },
        '&[data-disabled="true"]': {
          background: theme.colors["bg.disabled"],
          cursor: "not-allowed",
        },
        '&[data-state="checked"] ': {
          border: "none",
        },
        '&[data-state="indeterminate"]': {
          border: "none",
        },
      },
    }),
  ],
});

export const label = recipe({
  base: [
    {
      fontSize: "md",
    },
    style({
      cursor: "pointer",
      selectors: {
        '[data-disabled="true"] &': {
          cursor: "not-allowed",
        },
      },
    }),
  ],
});
