import React, { ReactNode, useState } from "react";
import classNames from "classnames/bind";

import { ToolTip } from "../ToolTip/ToolTip";
import { PassIcon } from "../icon/PassIcon/PassIcon";
import { WaringIcon } from "../icon/WaringIcon/WaringIcon";

import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  placeHolder: string;
  toolTipContent?: ReactNode;
  type: "normal" | "pass" | "warning",
  content?: string,
  hide: boolean,
  onChange?: any
  onBlur?: any
};

const cx = classNames.bind(styles);

function Input({ label, placeHolder, toolTipContent, type, content, hide, onChange, onBlur }: InputProps) {
  const [show, setShow] = useState(hide);
  return (
    <div className={cx("Input")}>
      {
        label &&
        <div className={cx("label-wrapper")}>
          <label className={cx("label")}>{label}</label>
          {toolTipContent && <ToolTip content={toolTipContent}/>}
        </div>
      }
      <div className={cx("input-wrapper")}>
        <input className={cx("input", type)} placeholder={placeHolder} type={show ? "password" : "text"} onChange={onChange} onBlur={onBlur}/>
        {
          hide &&
          <svg className={cx("hide", !show && "click")} onClick={() => setShow(!show)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9775 16.0388L12.4605 13.5218C11.3745 14.0168 10.1932 14.265 9 14.2515C7.77 14.2665 6.55275 14.001 5.4405 13.4753C4.5785 13.0547 3.80447 12.4739 3.15975 11.7638C2.47535 11.0302 1.93746 10.1725 1.575 9.23703L1.5 9.00153L1.57875 8.76453C2.12086 7.38174 3.03319 6.1749 4.21575 5.27628L2.25 3.31053L3.30975 2.25153L16.0365 14.9783L14.979 16.0388H14.9775ZM5.277 6.33828C4.31844 7.01021 3.56149 7.93106 3.08775 9.00153C3.58419 10.1469 4.41322 11.1168 5.46739 11.7854C6.52157 12.454 7.75227 12.7906 9 12.7515C9.78738 12.758 10.5702 12.6312 11.3153 12.3765L9.96525 11.0265C9.66525 11.1735 9.33525 11.2508 9 11.2515C8.40442 11.2478 7.83429 11.0095 7.41314 10.5884C6.99199 10.1672 6.75374 9.59711 6.75 9.00153C6.75 8.66628 6.82725 8.33553 6.975 8.03403L5.277 6.33828ZM14.889 11.709L13.845 10.6658C14.2842 10.1692 14.6442 9.60786 14.9122 9.00153C14.4165 7.85565 13.5876 6.88532 12.5333 6.21659C11.4789 5.54785 10.2479 5.2116 9 5.25153C8.81475 5.25153 8.62875 5.25828 8.44875 5.27103L7.125 3.94578C7.7415 3.81378 8.37 3.74853 9 3.75153C10.23 3.73653 11.4473 4.00203 12.5595 4.52778C13.422 4.94778 14.1953 5.52903 14.8403 6.23928C15.5243 6.972 16.0622 7.82858 16.425 8.76303L16.5 9.00153L16.4213 9.23853C16.0701 10.1521 15.5506 10.9916 14.8898 11.7135L14.889 11.709Z" fill="#3F3F3F"/>
          </svg>
        }
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
    </div>
  );
}

export { Input };