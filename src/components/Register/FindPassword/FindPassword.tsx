import React  from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Logo } from "../../../storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";
import { Button } from "../../../storybook/Button/Button";

import styles from "./FindPassword.module.scss";

const cx = classNames.bind(styles);

function FindPassword () {
  const navigator = useNavigate();
  return(
    <div className={cx("FindPassword")}>
      <Logo/>
      <p className={cx("content")}>회원 정보로 등록하신 이메일을 인증한 후<br/> 새 비밀번호를 등록합니다.</p>
      <div className={cx("wrapper")}>
        <Input label={"이름"} placeHolder={"이름을 입력해주세요"} type={"normal"} hide={false}/>
        <div className={cx("input-wrapper")}>
          <Input label={"이메일 주소"} placeHolder={"이메일을 입력해주세요"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.target.value)}/>
          <Button content={"인증하기"} onClick={() => console.log("인증완료")}/>
        </div>
        <div className={cx("input-wrapper")}>
          <Input label={"인증번호"} placeHolder={"인증번호를 입력해주세요"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.target.value)}/>
          <Button content={"인증완료"} onClick={() => console.log("인증완료")}/>
        </div>
        <div className={cx("button-wrapper")}>
          <span className={cx("notice")}>
            인증번호가 전송되지 않았나요?
            <span className={cx("blue")}>인증번호 재전송</span>
          </span>
          <Button content={"이전"} onClick={() => navigator("/make")}/>
        </div>
      </div>
    </div>
  );
}

export { FindPassword };