import React from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  placeHolder: string;
  toolTip:boolean;
  type: "normal" | "pass" | "warning"
};

const cx = classNames.bind(styles);

function Input({ label, placeHolder, toolTip, type }: InputProps) {
  return (
    <div className={cx("Input")}>
      <label className={cx("label")}>{label}</label>
      <input className={cx("input")} placeholder={placeHolder}/>
    </div>
  );
}

export { Input };