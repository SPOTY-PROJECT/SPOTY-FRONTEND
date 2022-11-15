import React from "react";
import classNames from "classnames/bind";
import styles from "./Complete.module.scss";
import { Logo } from "../../storybook/icon/Logo/Logo";
import { Button } from "../../storybook/Button/Button";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Complete = () => {
  const navigate = useNavigate();
  const onMain = () => {
    navigate(`/`);
  };
  const onLogin = () => {
    navigate(`/`);
  };
  return(
    <div className={cx("Complete")}>
      <Logo></Logo>
      <p className={cx("Ending")}>회원가입이 완료 되었습니다.</p>
      <div className={cx("CongraturationWord")}>
        <p className={cx("Congraturation")}>이성훈님의 가입을 환영합니다!</p>
        <p className={cx("Congraturation")}>아래 정보로 Spoty 서비스를 이용할 수 있습니다.</p>
      </div>
      <div className={cx("CheckInfo")}>
        <p className={cx("CheckInfoWord")}>· 이메일 : hongdildong@naver.com</p>
        <p className={cx("CheckInfoWord")}>· 이름 : 홍길동</p>
        <p className={cx("CheckInfoWord")}>· 닉네임 : 축구왕길동</p>
      </div>
      <div className={cx("ButtonWrapper")}>
        <Button content={"메인으로 이동"} onClick={onMain}></Button>
        <Button content={"로그인"} onClick={onLogin}></Button>
      </div>
    </div>
  );
};

export default Complete;