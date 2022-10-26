import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./CheckEmail.module.scss";
import { Logo } from "storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";

const cx = classNames.bind(styles);

function CheckEmail () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordType, setPasswordType] = useState<"normal" | "pass" | "warning">("normal");
  const [checkPasswordType, setCheckPasswordType] = useState<"normal" | "pass" | "warning">("normal");

  const confirmPassword = (e:any) => {
    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if(passwordRule.test(e.currentTarget.value)){
      setPasswordType("normal");
    }else{
      setPasswordType("warning");
    }
  };

  const samePassword = (e:any) => {
    if(checkPassword === password){
      setCheckPasswordType("normal");
    }else{
      setCheckPasswordType("warning");
    }
  };

  return(
    <div className={cx("CheckEmail")}>
      <Logo/>
      <p>이메일로 가입하기</p>
      <Input label={"이메일"} placeHolder={"이메일을 입력해 주세요."} type={"normal"} hide={false} onChange={(e:any) => setEmail(e.currentTarget.value)}/>
      <Input
        label={"비밀번호"}
        placeHolder={"비밀번호를 입력해주세요."}
        toolTipContent={"영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요."}
        content={"올바르지 않은 형식의 비밀번호입니다."}
        type={passwordType}
        hide={true}
        onChange={(e:any) => setPassword(e.currentTarget.value)}
        onBlur={confirmPassword}/>
      <Input
        label={"비밀번호 확인"}
        placeHolder={"비밀번호를 입력해주세요."}
        content={"비밀번호가 일치하지 않습니다."}
        type={checkPasswordType}
        hide={true} 
        onChange={(e:any) => setCheckPassword(e.currentTarget.value)}
        onBlur={samePassword}/>
    </div>
  );
}

export { CheckEmail };