import React from "react";
import classNames from "classnames/bind";

import styles from "./CloseIcon.module.scss";

type CloseIconProps = {
};

const cx = classNames.bind(styles);

function CloseIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.222 0.9646L1 18.1526" stroke="black"/>
      <path d="M1.00049 0.964524L18.2224 18.1526" stroke="black"/>
    </svg>
  );
}

export { CloseIcon };