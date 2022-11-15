import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

const Register = () => {
  return(
    <div className={cx("Register")}>
      <Outlet/>
    </div>
  );
};

export default Register;