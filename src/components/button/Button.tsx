import cx from "classnames";
import React from "react";

import styles from "./button.module.scss";

interface Props {
  variant: string;
  block?: boolean;
  className?: string;
  loading?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  block,
  className,
  loading,
  rounded,
  shadow,
  variant,
  ...props
}) => {
  return (
    <button
      className={cx(styles.button, className, {
        [styles.button_block]: block,
        [styles.button__disabled]: props.disabled && !loading,
        [styles.button__loading]: loading,
        [styles.button_rounded]: rounded,
        [styles.button_shadow]: shadow,
        [styles[`button_${variant}`]]: variant,
      })}
      {...props}
    >
      {loading ? <p>Loading...</p> : [props.children]}
    </button>
  );
};

export default Button;
