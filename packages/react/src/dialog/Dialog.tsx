import * as RadixDialog from "@radix-ui/react-dialog";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import { DialogProvider } from "../dialog-context";
import {
  NestedDialogProvider,
  useNestedDialogCount,
} from "../nested-dialog-context";

type DialogProps = {
  children?: React.ReactNode;
  /**
   * The initial open state in uncontrolled mode.
   */
  defaultOpen?: boolean;
  /**
   * Handler that is called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state in controlled mode.
   */
  open?: boolean;
};

export function Dialog({
  children,
  defaultOpen,
  onOpenChange,
  open: openProp,
  ...props
}: DialogProps) {
  const [open, setOpen] = useControllableState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: openProp,
  });

  const [nestedDialogCount, setNestedDialogCount] = useNestedDialogCount(
    "Dialog",
    open,
  );

  return (
    <NestedDialogProvider onCountChange={setNestedDialogCount}>
      <RadixDialog.Root onOpenChange={setOpen} open={open} {...props}>
        <DialogProvider nestedDialogCount={nestedDialogCount} open={open}>
          {children}
        </DialogProvider>
      </RadixDialog.Root>
    </NestedDialogProvider>
  );
}

Dialog.displayName = "@optiaxiom/react/Dialog";
