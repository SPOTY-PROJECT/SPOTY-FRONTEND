import React  from "react";
import classNames from "classnames/bind";

import { Logo } from "../../../storybook/icon/Logo/Logo";
import { Button } from "../../../storybook/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./Finish.module.scss";

const cx = classNames.bind(styles);

function Finish () {
  const navigator = useNavigate();
  return(
    <div className={cx("Finish")}>
      <Logo/>
      <p className={cx("notice")}>회원가입이 완료되었습니다!</p>
      <p className={cx("detail")}>홍길동 님의 가입을 환영합니다!<br/>아래 정보로 Spoty 서비스를 이용할 수 있습니다.</p>
      <div className={cx("data-wrapper")}>
        <li>이메일 : qnrl3442@naver.com</li>
        <br/>
        <li>이름 : 최부기</li>
        <br/>
        <li>닉네임 : 부기왕자</li>
      </div>
      <div className={cx("button-wrapper")}>
        <Button content={"메인으로 이동"} onClick={() => navigator("/")}/>
        <Button content={"로그인"} onClick={() => navigator("/")}/>
      </div>
    </div>
  );
}

export { Finish };