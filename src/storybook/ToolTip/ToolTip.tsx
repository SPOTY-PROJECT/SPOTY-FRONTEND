import React from "react";
import classNames from "classnames/bind";

import styles from "./ToolTip.module.scss";

type ToolTipProps = {
  content: string
};

const cx = classNames.bind(styles);

function ToolTip({ content }: ToolTipProps) {
  return (
    <div className={cx("ToolTip")}>
      <svg className={cx("icon")} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.05 7.2H4.95V6.3H4.05V7.2ZM4.5 0C2.016 0 0 2.016 0 4.5C0 6.984 2.016 9 4.5 9C6.984 9 9 6.984 9 4.5C9 2.016 6.984 0 4.5 0ZM4.5 8.1C2.5155 8.1 0.9 6.4845 0.9 4.5C0.9 2.5155 2.5155 0.9 4.5 0.9C6.4845 0.9 8.1 2.5155 8.1 4.5C8.1 6.4845 6.4845 8.1 4.5 8.1ZM4.5 1.8C3.5055 1.8 2.7 2.6055 2.7 3.6H3.6C3.6 3.105 4.005 2.7 4.5 2.7C4.995 2.7 5.4 3.105 5.4 3.6C5.4 4.5 4.05 4.3875 4.05 5.85H4.95C4.95 4.8375 6.3 4.725 6.3 3.6C6.3 2.6055 5.4945 1.8 4.5 1.8Z" fill="#979797"/>
      </svg>
      <div className={cx("content")}>{content}</div>
    </div>
  );
}

export { ToolTip };