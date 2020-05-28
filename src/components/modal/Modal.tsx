import cx from "classnames";
import React from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

interface Props {
  className: string;
  handleClose?: (e: React.MouseEvent) => void;
  size: string;
  show: boolean;
  title?: string;
}

class Modal extends React.Component<Props, {}> {
  element: HTMLDivElement = document.createElement("div");
  modalRoot: HTMLElement = document.getElementById("modal");
  appRoot: HTMLElement = document.getElementById("root");

  componentDidMount() {
    this.modalRoot.appendChild(this.element);
    this.appRoot.setAttribute("aria-hidden", "true");
    this.modalRoot.focus();
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
    this.appRoot.setAttribute("aria-hidden", "false");
  }
  render() {
    const {
      className,
      children,
      handleClose,
      title,
      size,
      show,
      ...rest
    } = this.props;
    const content = (
      <>
        <div
          className={cx(styles.modal, className, {
            [styles.modal_small]: size === "s",
            [styles.modal_medium]: size === "m",
            [styles.modal_cover]: size === "cover",
          })}
          role="dialog"
          aria-label={title}
          {...rest}
        >
          <main className={styles.modal_body}>{children}</main>
        </div>
        {show && (
          <div className={styles.modal_mask} onClick={handleClose}></div>
        )}
      </>
    );
    return createPortal(content, this.element);
  }
}
export default Modal;
