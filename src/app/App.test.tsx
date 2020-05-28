import React from "react";
import { render } from "@testing-library/react";
import { App } from ".";

test("renders app", () => {
  const tree = render(<App />);
  expect(tree.asFragment()).toMatchSnapshot();
});
