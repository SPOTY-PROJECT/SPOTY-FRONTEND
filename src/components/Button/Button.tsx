import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

type HeaderProps = {
    title: string;
    color?: "yellow" | "normal";
    onClose?: React.MouseEventHandler;
    onReturn?: React.MouseEventHandler;
};

const cx = classNames.bind(styles);

function Button({ title, color = "normal" }: HeaderProps) {
  return (
    <header className={cx("PopupHeader", color === "yellow" ? "color" : "")}>
      <div className={cx("title")}>
        {title}
        <div className={cx("test")}>
          test
        </div>
      </div>
    </header>
  );
}

export { Button };