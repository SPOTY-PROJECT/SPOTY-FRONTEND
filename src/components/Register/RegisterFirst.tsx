import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./RegisterFirst.module.scss";
import { Logo } from "../../storybook/icon/Logo/Logo";
import { Input } from "../../storybook/Input/Input";
import { Button } from "../../storybook/Button/Button";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const RegisterFirst = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [emailType, setEmailType] = useState<"normal"|"pass"|"warning">("normal");
  const [passType, setPassType] = useState<"normal"|"pass"|"warning">("normal");
  const [checkPassType, setCheckPassType] = useState<"normal"|"pass"|"warning">("normal");

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegCheck = (e:any) => {
    if(emailRegEx.test(e.currentTarget.value)){
      setEmailType("normal");
    }else{
      setEmailType("warning");
    }
  };

  const passRegCheck = (e:any) => {
    if(passwordRegEx.test(e.currentTarget.value)){
      setPassType("normal");
    }else{
      setPassType("warning");
    }
  };

  const rePass = () => {
    if(checkPass === pass){
      setCheckPassType("normal");
    }else{
      setCheckPassType("warning");
    }
  };

  const onNext = () => {
    navigate(`/Certification`);
  };

  return(
    <div className={cx("RegisterFirst")}>
      <Logo/>
      <p className={cx("PageName")}>이메일로 가입하기</p>
      <div className={cx("InputWrapper")}>
        <Input label={"이메일 주소"}
          placeHolder={"이메일을 입력해주세요."}
          type={emailType} hide={false}
          onChange={(e:any) => setEmail(e.currentTarget.value)}
          onBlur={emailRegCheck} />
        <Input label={"비밀번호"}
          placeHolder={"비밀번호를 입력해주세요."}
          type={passType}
          hide={true}
          toolTipContent={"영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력하시오."}
          onChange={(e:any) => setPass(e.currentTarget.value)}
          onBlur={passRegCheck}/>
        <Input label={"비밀번호 확인"}
          placeHolder={"비밀번호를 입력해주세요."}
          type={checkPassType}
          hide={true}
          onChange={(e:any) => setCheckPass(e.currentTarget.value)}
          onBlur={rePass}/>
      </div>
      <div className={cx("ButtonWrapper")}>
        <Button content={"이전"} onClick={() => {
          navigate(-1);
        }}/>
        <Button content={"계속하기"} onClick={onNext}/>
      </div>
      <p className={cx("Refer")}>"계속하기"를 클릭하면 Spoty의 이용 약관 및 개인정보처리방침에 동의합니다.</p>
      <div className={cx("Line")}>
        <div><hr/></div>
        <p className={cx("Linefont")}>또는</p>
        <div><hr/></div>
      </div>
      <div className={cx("OtherRegisterWrapper")}>
        <Button content={"Google 계정으로 가입하기"} onClick={() => {}}/>
        <Button content={"Naver 계정으로 가입하기"} onClick={() => {}}/>
        <Button content={"Kakao 계정으로 가입하기"} onClick={() => {}}/>
      </div>
    </div>
  );
};
export default RegisterFirst;