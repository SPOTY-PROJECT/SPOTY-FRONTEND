import React from "react";
import classNames from "classnames/bind";

import styles from "./WaringIcon.module.scss";

type WaringIconProps = {
};

const cx = classNames.bind(styles);

function WaringIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.35202 3.125C7.02559 1.95833 8.70953 1.95833 9.3831 3.125L12.7325 8.92634C13.4061 10.093 12.5641 11.5513 11.217 11.5513H4.51816C3.171 11.5513 2.32904 10.093 3.00261 8.92634L6.35202 3.125Z" fill="white" stroke="#FF3636" strokeWidth="0.5"/>
      <path d="M8.32543 3.37752H7.36543L7.44543 8.45752H8.26543L8.32543 3.37752ZM7.22543 9.87752C7.22543 10.2275 7.51543 10.5175 7.86543 10.5175C8.20543 10.5175 8.48543 10.2275 8.48543 9.87752C8.48543 9.53752 8.20543 9.25752 7.86543 9.25752C7.51543 9.25752 7.22543 9.53752 7.22543 9.87752Z" fill="#FF3636"/>
    </svg>
  );
}

export { WaringIcon };