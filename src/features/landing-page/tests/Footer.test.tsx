import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

const FooterProps = {};
test("renders landing page footer", () => {
  const tree = render(
    <BrowserRouter>
      <Footer {...FooterProps} />
    </BrowserRouter>
  );
  expect(tree.asFragment()).toMatchSnapshot();
});
