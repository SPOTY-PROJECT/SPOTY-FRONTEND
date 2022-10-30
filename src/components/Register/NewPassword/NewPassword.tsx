import React  from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Logo } from "../../../storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";
import { Button } from "../../../storybook/Button/Button";

import styles from "./NewPassword.module.scss";

const cx = classNames.bind(styles);

function NewPassword () {
  const navigator = useNavigate();
  return(
    <div className={cx("NewPassword")}>
      <Logo/>
      <p className={cx("content")}>회원 정보로 등록하신 이메일을 인증한 후<br/> 새 비밀번호를 등록합니다.</p>
      <div className={cx("wrapper")}>
        <Input label={"새 비밀번호"} placeHolder={"비밀번호를 입력해주세요"} type={"normal"} hide={true} toolTipContent={"영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요."}/>
        <Input label={"새 비밀번호 확인"} placeHolder={"비밀번호를 입력해주세요"} type={"normal"} hide={true}/>
        <Button content={"새 비밀번호 등록하기"} onClick={() => navigator("/finish?type=find")}/>
      </div>
    </div>
  );
}

export { NewPassword };