import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Certification.module.scss";
import { Logo } from "../../storybook/icon/Logo/Logo";
import { Input } from "../../storybook/Input/Input";
import { Button } from "../../storybook/Button/Button";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Certification = () => {
  const navigate = useNavigate();

  const onNext = () => {
    navigate(`/Information`);
  };

  return(
    <div className={cx("Certification")}>
      <Logo/>
      <p className={cx("PageName")}>이메일로 가입하기</p>
      <div className={cx("CertificationNum")}>
        <Input label={""} placeHolder={"인증번호를 입력해주세요"} type={"normal"} hide={false}></Input>
        <Button content={"인증완료"} onClick={() => {}}></Button>
      </div>
      <div className={cx("ButtonWrapper")}>
        <div className={cx("ButtonWrapper")}>
          <Button content={"이전"} onClick={() => {
            navigate(-1);
          }}/>
          <Button content={"계속하기"} onClick={onNext}/>
        </div>
      </div>
      <p className={cx("Refer")}>"계속하기"를 클릭하면 Spoty의 이용 약관 및 개인정보처리방침에 동의합니다.</p>
    </div>);
};
export default Certification;