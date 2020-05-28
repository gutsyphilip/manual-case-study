import React, { useRef } from "react";
import { render } from "@testing-library/react";
import Hero from "../components/Hero";
import { Simulate } from "react-dom/test-utils";

const HeroProps = {
  setShowQuizModal: jest.fn(() => {}),
};

test("User can click button to start quiz", () => {
  const { getByText } = render(<Hero {...HeroProps} />);
  const startQuizButton = getByText("TAKE THE QUIZ");

  Simulate.click(startQuizButton);
  expect(HeroProps.setShowQuizModal).toHaveBeenCalledTimes(1);
  expect(HeroProps.setShowQuizModal).toBeCalledWith(true);
});
