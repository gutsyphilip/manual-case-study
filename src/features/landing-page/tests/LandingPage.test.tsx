import React from "react";
import { render } from "@testing-library/react";
import { LandingPage } from "../components";
import { BrowserRouter } from "react-router-dom";

const LandingPageProps = {};
test("renders landing page", () => {
  const tree = render(
    <BrowserRouter>
      <LandingPage {...LandingPageProps} />
    </BrowserRouter>
  );
  expect(tree.asFragment()).toMatchSnapshot();
});
