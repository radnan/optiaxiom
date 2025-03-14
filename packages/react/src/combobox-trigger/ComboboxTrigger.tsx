import { useComposedRefs } from "@radix-ui/react-compose-refs";
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useMemo,
  useRef,
} from "react";

import { AngleMenuButton } from "../angle-menu-button";
import { useComboboxContext } from "../combobox-context";
import { PopoverTrigger } from "../popover-trigger";
import { useFieldLabelTrigger } from "../use-field-label-trigger";

type ComboboxTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger> & {
  placeholder?: string;
};

export const ComboboxTrigger = forwardRef<
  HTMLButtonElement,
  ComboboxTriggerProps
>(
  (
    {
      "aria-labelledby": ariaLabelledBy,
      asChild,
      children,
      placeholder,
      ...props
    },
    outerRef,
  ) => {
    const {
      components,
      itemToString,
      setOpen,
      value: valueContext,
    } = useComboboxContext("@optiaxiom/react/ComboboxTrigger");
    const value = useMemo(
      () => (valueContext instanceof Set ? [...valueContext] : valueContext),
      [valueContext],
    );

    const buttonRef = useRef<HTMLButtonElement>(null);
    const ref = useComposedRefs(outerRef, buttonRef);

    const labelId = useFieldLabelTrigger(buttonRef, ariaLabelledBy);

    return (
      <components.Trigger
        aria-labelledby={labelId}
        asChild
        onKeyDown={(event) => {
          switch (event.key) {
            case "ArrowDown":
            case "ArrowUp":
              setOpen(true);
          }
        }}
        ref={ref}
        role="combobox"
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <AngleMenuButton>
            {Array.isArray(value) && value.length > 0
              ? (children ?? (
                  <>
                    {value.length === 1 ? (
                      itemToString(value[0])
                    ) : (
                      <>{value.length} selected</>
                    )}
                  </>
                ))
              : placeholder}
          </AngleMenuButton>
        )}
      </components.Trigger>
    );
  },
);

ComboboxTrigger.displayName = "@optiaxiom/react/ComboboxTrigger";
