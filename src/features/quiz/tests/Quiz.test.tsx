import React, { useRef } from "react";
import { render, cleanup } from "@testing-library/react";
import Quiz from "../components/Quiz";
import { Simulate } from "react-dom/test-utils";

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

test("user can select quiz options", () => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  const { container, getAllByTestId, unmount } = render(
    <Quiz {...QuizProps} />,
    {
      container: document.body.appendChild(modalRoot),
    }
  );
  const optionsListNodes = getAllByTestId("options-list");
  //   console.log(optionsListNodes[0].firstChild);
  optionsListNodes.forEach((options) => {
    // console.log(options.firstChild);
    Simulate.click(options.firstChild);
  });
  console.log(container);
  unmount();

  //   expect(questionNode).toMatchSnapshot();
});
