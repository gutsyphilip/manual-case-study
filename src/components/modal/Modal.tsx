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
  description?: string;
}

class Modal extends React.Component<Props, {}> {
  element: HTMLDivElement = document.createElement("div");
  modalRoot: HTMLElement = document.getElementById("modal");

  componentDidMount() {
    this.modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
  }
  render() {
    const {
      className,
      children,
      handleClose,
      size,
      show,
      title,
      description,
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
