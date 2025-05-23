import { useComposedRefs } from "@radix-ui/react-compose-refs";
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { Box } from "../box";
import { CommandInput } from "../command";
import { useCommandContext } from "../command/internals";
import { useMenuContext } from "./MenuContext";
import * as styles from "./MenuInput.css";

export type MenuInputProps = ComponentPropsWithoutRef<typeof CommandInput>;

export const MenuInput = forwardRef<HTMLInputElement, MenuInputProps>(
  ({ className, ...props }, outerRef) => {
    const { inputRef, open, size } = useMenuContext(
      "@optiaxiom/react/MenuInput",
    );
    const { downshift } = useCommandContext("@optiaxiom/react/MenuInput");
    const ref = useComposedRefs(inputRef, outerRef);

    const [minWidth, setMinWidth] = useState(160);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      if (open && rect.width > minWidth) {
        setMinWidth(rect.width);
      }
    }, [downshift.inputValue, minWidth, open]);

    return (
      <Box ref={containerRef} style={{ minWidth }}>
        <CommandInput
          ref={ref}
          size={size === "sm" ? "md" : "xl"}
          {...styles.input({ size }, className)}
          {...props}
        />
      </Box>
    );
  },
);

MenuInput.displayName = "@optiaxiom/react/MenuInput";
