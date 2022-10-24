import React from "react";
import classNames from "classnames/bind";

import { ToolTip } from "../ToolTip/ToolTip";
import { PassIcon } from "../Icon/PassIcon/PassIcon";
import { WaringIcon } from "../Icon/WaringIcon/WaringIcon";

import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  placeHolder: string;
  toolTipContent?: string;
  type: "normal" | "pass" | "warning",
  content?: string
};

const cx = classNames.bind(styles);

function Input({ label, placeHolder, toolTipContent, type, content }: InputProps) {
  return (
    <div className={cx("Input")}>
      <div className={cx("wrapper")}>
        <label className={cx("label")}>{label}</label>
        {toolTipContent && <ToolTip content={toolTipContent}/>}
      </div>
      <input className={cx("input", type)} placeholder={placeHolder}/>
      {type === "pass" &&
        <div className={cx("content", type)}>
          <PassIcon/>
          {content}
        </div>
      }
      {type === "warning" &&
        <div className={cx("content", type)}>
          <WaringIcon/>
          {content}
        </div>
      }
    </div>
  );
}

export { Input };