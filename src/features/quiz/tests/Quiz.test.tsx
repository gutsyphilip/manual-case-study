import React, { useRef } from "react";
import { render, cleanup } from "@testing-library/react";
import Quiz from "../components/Quiz";
import { Simulate, createRenderer } from "react-dom/test-utils";

const QuizProps = {
  setShowQuizModal: jest.fn(() => {}),
  showQuizModal: true,
};

test("quiz modal renders properly", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  const { container, unmount } = render(<Quiz {...QuizProps} />, {
    container: document.body.appendChild(modalRoot),
  });
  expect(container).toMatchSnapshot();
  unmount();
});
