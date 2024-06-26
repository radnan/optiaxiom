import { Box, theme } from "@optimizely-axiom/react";

export function App() {
  return (
    <Box
      background={{ dark: "brand.600", light: "brand.50" }}
      borderRadius="sm"
      margin="lg"
      padding="lg"
      style={{
        border: `1px solid ${theme.colors["brand.200"]}`,
        padding: theme.spacing.md,
      }}
    >
      This is a Box
    </Box>
  );
}
