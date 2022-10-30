import React  from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Logo } from "../../../storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";
import { Button } from "../../../storybook/Button/Button";

import styles from "./CheckNumber.module.scss";

const cx = classNames.bind(styles);

function CheckNumber () {
  const navigator = useNavigate();
  return(
    <div className={cx("CheckNumber")}>
      <Logo/>
      <p>이메일로 가입하기</p>
      <div className={cx("input-wrapper")}>
        <Input label={""} placeHolder={"인증번호를 입력해주세요"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.target.value)}/>
        <Button content={"인증완료"} onClick={() => console.log("인증완료")}/>
      </div>
      <div className={cx("button-wrapper")}>
        <Button content={"이전"} onClick={() => navigator(-1)}/>
        <Button content={"계속하기"} onClick={() => navigator("/extra?self=true")}/>
      </div>
      <p className={cx("explain")}>"계속하기"를 클릭하면 Spoty의 <a className={cx("notice")}>이용 약관 및 개인정보처리방침</a>에 동의합니다.</p>
    </div>
  );
}

export { CheckNumber };