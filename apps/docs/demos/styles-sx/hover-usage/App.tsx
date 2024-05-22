import { Box } from "@optiaxiom/react";

import { Canvas } from "../Canvas";

export function App() {
  return (
    <Canvas>
      <Box bg="aqua.50" sx={{ ":hover": { bg: "aqua.200" } }}>
        Contact
      </Box>
    </Canvas>
  );
}