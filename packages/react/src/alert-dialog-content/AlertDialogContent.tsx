import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

import type { ExcludeProps } from "../utils";

import {
  AlertDialogContextProvider,
  useAlertDialogContext,
} from "../alert-dialog-context";
import { Backdrop } from "../backdrop";
import { Box, type BoxProps } from "../box";
import { Flex } from "../flex";
import { Paper } from "../paper";
import { Transition } from "../transition";
import { TransitionGroup } from "../transition-group";
import * as styles from "./AlertDialogContent.css";

type AlertDialogContentProps = ExcludeProps<
  BoxProps<typeof RadixAlertDialog.Content, styles.DialogVariants>,
  "forceMount"
>;

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ children, size = "sm", ...props }, ref) => {
  const { open } = useAlertDialogContext("AlertDialogContent");

  return (
    <TransitionGroup open={open}>
      <RadixAlertDialog.Portal forceMount>
        <Transition>
          <Backdrop asChild>
            <RadixAlertDialog.Overlay />
          </Backdrop>
        </Transition>

        <Flex {...styles.container()}>
          <Box flex="1" pointerEvents="none" />

          <Transition data-side="bottom" type="fade">
            <Paper asChild elevation="dialog" {...styles.content({ size })}>
              <RadixAlertDialog.Content ref={ref} {...props}>
                <AlertDialogContextProvider open={open}>
                  {children}
                </AlertDialogContextProvider>
              </RadixAlertDialog.Content>
            </Paper>
          </Transition>

          <Box flex="1" pointerEvents="none" />
          <Box flex="1" pointerEvents="none" />
        </Flex>
      </RadixAlertDialog.Portal>
    </TransitionGroup>
  );
});

AlertDialogContent.displayName = "@optiaxiom/react/AlertDialogContent";
