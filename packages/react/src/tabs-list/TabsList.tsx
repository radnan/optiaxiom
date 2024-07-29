import * as RadixTabs from "@radix-ui/react-tabs";
import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import * as styles from "./TabsList.css";

type TabsListProps = BoxProps<typeof RadixTabs.List>;

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box asChild {...styles.list()}>
        <RadixTabs.List ref={ref} {...props}>
          {children}
        </RadixTabs.List>
      </Box>
    );
  },
);

TabsList.displayName = "@optiaxiom/react/TabsList";
