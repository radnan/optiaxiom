import { ToastProviderProvider } from "@optiaxiom/globals";
import { type createToaster, toaster } from "@optiaxiom/globals";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import * as RadixToast from "@radix-ui/react-toast";
import { type ComponentPropsWithoutRef, forwardRef, useRef } from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim";

import { type BoxProps, extractBoxProps } from "../box";
import { Flex } from "../flex";
import { Portal } from "../portal";
import { Toast } from "./Toast";
import { ToastAction } from "./ToastAction";
import * as styles from "./ToastProvider.css";
import { ToastTitle } from "./ToastTitle";
import { useOverflowAnchor } from "./useOverflowAnchor";

export type ToastProviderProps = BoxProps<
  typeof RadixToast.Viewport,
  ComponentPropsWithoutRef<typeof RadixToast.ToastProvider> &
    Pick<ComponentPropsWithoutRef<typeof Portal>, "container"> &
    styles.ViewportVariants & {
      children?: never;
      /**
       * An instance of toaster returned from the `createToaster` method.
       */
      toaster?: ReturnType<typeof createToaster>;
    }
>;

const mapPositionToSwipeDirection = {
  bottom: "down",
  "bottom-left": "left",
  "bottom-right": "right",
  top: "up",
  "top-left": "left",
  "top-right": "right",
} as const;

export const ToastProvider = forwardRef<HTMLOListElement, ToastProviderProps>(
  (
    {
      className,
      container,
      duration,
      label,
      position = "top-right",
      swipeDirection,
      swipeThreshold,
      toaster: toasterProp = toaster,
      ...props
    },
    outerRef,
  ) => {
    const { boxProps, restProps } = extractBoxProps(props);
    const toasts = useSyncExternalStore(...toasterProp.store);

    const innerRef = useRef<HTMLOListElement>(null);
    const ref = useComposedRefs(innerRef, outerRef);
    useOverflowAnchor(
      innerRef,
      position.startsWith("bottom") ? "top" : "bottom",
    );

    if (!toasts.length) {
      return null;
    }

    let exitingToastOffsets = 0;

    return (
      <RadixToast.ToastProvider
        duration={duration}
        label={label}
        swipeDirection={swipeDirection ?? mapPositionToSwipeDirection[position]}
        swipeThreshold={swipeThreshold}
      >
        {toasts.map(({ id, open, ref, toast }) => (
          <ToastProviderProvider
            key={id}
            offset={
              (exitingToastOffsets +=
                !open && ref.current
                  ? ref.current.offsetHeight + parseInt(styles.gap)
                  : 0)
            }
            onOpenChange={() => toasterProp.remove(id)}
            open={open}
            toastRef={ref}
          >
            <Toast intent={toast.intent || toast.type} key={id}>
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.action && (
                <ToastAction altText={toast.action} onClick={toast.onAction}>
                  {toast.action}
                </ToastAction>
              )}
            </Toast>
          </ToastProviderProvider>
        ))}

        <Portal asChild {...(container && { container })}>
          <Flex
            alignItems={
              position.endsWith("left")
                ? "start"
                : position.endsWith("right")
                  ? "end"
                  : "center"
            }
            asChild
            data-position={position}
            flexDirection={
              position.startsWith("bottom") ? "column-reverse" : "column"
            }
            {...styles.viewport({ position }, className)}
            {...boxProps}
          >
            <RadixToast.Viewport ref={ref} {...restProps} />
          </Flex>
        </Portal>
      </RadixToast.ToastProvider>
    );
  },
);

ToastProvider.displayName = "@optiaxiom/react/ToastProvider";
