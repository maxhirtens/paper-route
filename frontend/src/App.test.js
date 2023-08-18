import { render } from "@testing-library/react";
import App from "./App";

// smoke test for App component.
it("renders without crashing", function () {
  render(<App />);
});
