import React from "react";
import { render } from "@testing-library/react";
import styles from "./modal.module.scss";

import Modal from "./Modal";

const ModalProps = {
  className: styles.modal,
  show: true,
  size: "cover",
  handleClose: jest.fn(),
  title: "Test modal",
};

beforeEach(() => {
  const container = document.createElement("div");
  container.id = "modal";
  document.body.appendChild(container);
});

describe("Modal", () => {
  it("should render markup correctly", () => {
    const tree = render(<Modal {...ModalProps} />, { container: "div#modal" });
    expect(tree.asFragment()).toMatchSnapshot();
  });
});
