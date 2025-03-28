import "@optiaxiom/web-components";
import { describe, expect, it } from "vitest";

import { render, screen, waitFor, withinShadowRoot } from "../vitest.rtl";

const Button = "ax-button";

describe("Self-loading components", () => {
  function setup(overrides = {}) {
    return render(
      <Button appearance="primary" {...overrides}>
        Primary
      </Button>,
    );
  }

  it("should render properly", async () => {
    setup();
    await waitFor(() =>
      expect(
        withinShadowRoot(screen.getByText("Primary")).getByRole("button"),
      ).toBeInTheDocument(),
    );
  });
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [Button]: any;
    }
  }
}
