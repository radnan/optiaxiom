import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";

type AlertDialogBodyProps = BoxProps<typeof RadixAlertDialog.Description>;

export const AlertDialogBody = forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ children, ...props }, ref) => (
    <Box
      asChild
      flex="1"
      fontSize="md"
      overflow="auto"
      px="24"
      py="16"
      ref={ref}
      {...props}
    >
      <RadixAlertDialog.Description asChild>
        <div>{children}</div>
      </RadixAlertDialog.Description>
    </Box>
  ),
);

AlertDialogBody.displayName = "@optiaxiom/react/AlertDialogBody";
