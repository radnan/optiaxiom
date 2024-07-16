import * as RadixRadio from "@radix-ui/react-radio-group";
import {
  Children,
  type ComponentPropsWithRef,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";

import type { ExtendProps } from "../utils";

import { Flex } from "../flex";
import { RadioItem } from "../radio-item";
import { extractSprinkles } from "../sprinkles";

type RadioGroupProps = ExtendProps<
  ComponentPropsWithRef<typeof Flex>,
  ComponentPropsWithRef<typeof RadixRadio.RadioGroup>,
  {
    children: ReactElement<typeof RadioItem> | ReactElement<typeof RadioItem>[];
    readonly?: boolean;
  }
>;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, disabled, readonly, ...props }, ref) => {
    const { restProps, sprinkleProps } = extractSprinkles(props);

    return (
      <Flex asChild gap="sm" {...sprinkleProps}>
        <RadixRadio.RadioGroup
          disabled={disabled || readonly}
          ref={ref}
          {...restProps}
        >
          {Children.map(children, (child) => {
            if (
              isValidElement<ComponentPropsWithRef<typeof RadioItem>>(child)
            ) {
              return cloneElement(child, {
                ...child.props,
                disabled: child.props?.disabled || disabled,
                readonly: readonly,
              });
            }
            return child;
          })}
        </RadixRadio.RadioGroup>
      </Flex>
    );
  },
);

RadioGroup.displayName = "@optiaxiom/react/RadioGroup";