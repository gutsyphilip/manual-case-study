import React from "react";
import { render } from "@testing-library/react";
import Quiz from "../components/Quiz";

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
