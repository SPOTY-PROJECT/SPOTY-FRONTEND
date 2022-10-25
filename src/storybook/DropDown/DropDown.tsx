import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./DropDown.module.scss";

type DropDownProps = {
  title: string;
  option: string[];
  placeHolder: string;
};

const cx = classNames.bind(styles);

function DropDown({ title, option, placeHolder }: DropDownProps) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className={cx("DropDown")}>
      <label className={cx("title")}>{title}</label>
      <div className={cx("input-wrapper")}>
        <input className={cx("input")} placeholder={placeHolder} value={value && value}/>
        <svg className={cx("icon")} onClick={() => setShow(!show)} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L4.96036 6L9 1" stroke="black" strokeLinecap="round"/>
        </svg>
      </div>
      {
        show &&
        <div className={cx("option-wrapper")}>
          {
            option.map((item) => {
              return <div className={cx("option")} onClick={() => {
                setValue(item);
                setShow(!show);
              }}>
                {item}
              </div>;
            })
          }
        </div>
      }
    </div>
  );
}

export { DropDown };