import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

type ButtonProps = {
  content: string;
  onClick: any;
};

const cx = classNames.bind(styles);

function Button({ content, onClick }: ButtonProps) {
  return (
    <div className={cx("Button")} onClick={onClick}>
      {content}
    </div>
  );
}

export { Button };