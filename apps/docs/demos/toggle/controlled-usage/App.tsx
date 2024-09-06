import { Button, Flex, Toggle } from "@optiaxiom/react";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { useState } from "react";

export function App() {
  const [value, setValue] = useState(false);

  return (
    <Flex flexDirection="row">
      <Toggle
        aria-label="Toggle sidebar"
        icon={<IconLayoutSidebar />}
        onPressedChange={setValue}
        pressed={value}
      />

      <Button disabled={!value} onClick={() => setValue(false)}>
        Reset
      </Button>
    </Flex>
  );
}