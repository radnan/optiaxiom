import * as RadixToast from "@radix-ui/react-toast";
import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import { Button } from "../button";
import { IconDanger } from "../icons/IconDanger";
import { IconInfoCircle } from "../icons/IconInfoCircle";
import { IconSuccess } from "../icons/IconSuccess";
import { IconWarning } from "../icons/IconWarning";
import { IconX } from "../icons/IconX";
import { Paper } from "../paper";
import { extractSprinkles } from "../sprinkles";
import * as styles from "./Toast.css";

export type ToastProps = BoxProps<
  typeof RadixToast.Root,
  NonNullable<styles.RootVariants>
>;

export type ToastActionElement = React.ReactElement<typeof RadixToast.Action>;

const iconMap = new Map([
  ["danger", IconDanger],
  ["neutral", IconInfoCircle],
  ["success", IconSuccess],
  ["warning", IconWarning],
]);

const getIcon = (type: string) => {
  const IconComponent = iconMap.get(type);
  return IconComponent ? <IconComponent /> : null;
};

export const Toast = forwardRef<HTMLLIElement, ToastProps>(
  (
    { children, colorScheme = "neutral", onOpenChange, open, ...props },
    ref,
  ) => {
    const { restProps, sprinkleProps } = extractSprinkles(props);

    return (
      <Paper
        asChild
        elevation="md"
        {...styles.root({ colorScheme })}
        {...sprinkleProps}
      >
        <RadixToast.Root
          onOpenChange={onOpenChange}
          open={open}
          ref={ref}
          {...restProps}
        >
          <Box asChild {...styles.icon()}>
            {getIcon(colorScheme)}
          </Box>

          {children}

          <RadixToast.Close asChild>
            <Button
              appearance="secondary"
              aria-label="close"
              icon={<IconX />}
              size="sm"
            />
          </RadixToast.Close>
        </RadixToast.Root>
      </Paper>
    );
  },
);

Toast.displayName = "@optiaxiom/react/Toast";
