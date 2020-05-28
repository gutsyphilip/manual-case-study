import React from "react";
import { render } from "@testing-library/react";
import Services from "../components/Services";
import { SERVICES_LIST } from "../data";

const ServicesProps = {
  servicesList: SERVICES_LIST,
};
test("renders services based on data list", () => {
  const tree = render(<Services {...ServicesProps} />);
  expect(tree.asFragment()).toMatchSnapshot();
});
