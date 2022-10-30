import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import { CloseIcon } from "../icon/CloseIcon/CloseIcon";

import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  onClick: any
};

const cx = classNames.bind(styles);

function Modal({ children, onClick }: ModalProps) {
  return (
    <div className={cx("Modal")}>
      <div className={cx("children")}>
        {children}
        <div className={cx("icon")} onClick={onClick}>
          <CloseIcon/>
        </div>
      </div>
    </div>
  );
}

export { Modal };