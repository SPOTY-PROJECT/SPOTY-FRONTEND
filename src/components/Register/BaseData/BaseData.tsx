import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Logo } from "storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";
import { Button } from "../../../storybook/Button/Button";

import styles from "./BaseData.module.scss";

const cx = classNames.bind(styles);

function BaseData () {
  const navigator = useNavigate();
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

  const samePassword = () => {
    if(checkPassword === password){
      setCheckPasswordType("normal");
    }else{
      setCheckPasswordType("warning");
    }
  };

  return(
    <div className={cx("BaseData")}>
      <Logo/>
      <p>이메일로 가입하기</p>
      <div className={cx("input-wrapper")}>
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
      <div className={cx("button-wrapper")}>
        <Button content={"이전"} onClick={() => navigator(-1)}/>
        <Button content={"계속하기"} onClick={() => navigator("/check")}/>
      </div>
      <p className={cx("explain")}>"계속하기"를 클릭하면 Spoty의 <a className={cx("notice")}>이용 약관 및 개인정보처리방침</a>에 동의합니다.</p>
      <div className={cx("horizon")}>
        <span className={cx("text")}>또는</span>
      </div>
      <div className={cx("social")}>
        <div className={cx("social-register")}>
          <svg className={cx("icon")} width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 0V31H21.9285L11.0715 15.3934V31H0V0H11.0715L21.9285 16.234V0H33Z" fill="#06BE34"/>
          </svg>
          Google 계정으로 가입하기
        </div>
        <div className={cx("social-register")}>
          <svg className={cx("icon")} width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 0V31H21.9285L11.0715 15.3934V31H0V0H11.0715L21.9285 16.234V0H33Z" fill="#06BE34"/>
          </svg>
          Naver 계정으로 가입하기
        </div>
        <div className={cx("social-register")}>
          <svg className={cx("icon")} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33" height="33" rx="7" fill="#F9E000"/>
            <path d="M16.5 6.375C23.0239 6.375 28.3125 10.497 28.3125 15.5831C28.3125 20.6681 23.0239 24.7901 16.5 24.7901C15.8504 24.7905 15.2014 24.7491 14.5571 24.6664L9.59812 27.9098C9.0345 28.2079 8.83538 28.1753 9.06713 27.4451L10.0706 23.3074C6.83062 21.6649 4.6875 18.8186 4.6875 15.5831C4.6875 10.4981 9.97613 6.375 16.5 6.375ZM23.1454 15.4425L24.7991 13.8405C24.8946 13.7414 24.9478 13.6091 24.9476 13.4715C24.9475 13.334 24.8939 13.2018 24.7982 13.103C24.7026 13.0041 24.5723 12.9462 24.4348 12.9415C24.2973 12.9368 24.1633 12.9856 24.0611 13.0778L21.8921 15.177V13.4422C21.8921 13.3014 21.8362 13.1664 21.7366 13.0668C21.637 12.9672 21.502 12.9113 21.3611 12.9113C21.2203 12.9113 21.0852 12.9672 20.9857 13.0668C20.8861 13.1664 20.8301 13.3014 20.8301 13.4422V16.3189C20.8102 16.4009 20.8102 16.4866 20.8301 16.5686V18.1875C20.8301 18.3283 20.8861 18.4634 20.9857 18.563C21.0852 18.6626 21.2203 18.7185 21.3611 18.7185C21.502 18.7185 21.637 18.6626 21.7366 18.563C21.8362 18.4634 21.8921 18.3283 21.8921 18.1875V16.6541L22.3725 16.1895L23.979 18.4766C24.0191 18.5337 24.0701 18.5824 24.129 18.6198C24.1879 18.6572 24.2536 18.6826 24.3223 18.6946C24.3911 18.7066 24.4615 18.705 24.5296 18.6898C24.5977 18.6746 24.6621 18.6461 24.7192 18.606C24.7764 18.5659 24.825 18.5149 24.8624 18.456C24.8998 18.3971 24.9252 18.3314 24.9372 18.2627C24.9493 18.1939 24.9476 18.1235 24.9324 18.0554C24.9172 17.9873 24.8887 17.9229 24.8486 17.8657L23.1454 15.4414V15.4425ZM19.8176 17.607H18.1751V13.4591C18.1688 13.3227 18.1102 13.1939 18.0114 13.0995C17.9126 13.0052 17.7813 12.9526 17.6447 12.9526C17.5081 12.9526 17.3767 13.0052 17.278 13.0995C17.1792 13.1939 17.1205 13.3227 17.1142 13.4591V18.138C17.1142 18.4305 17.3505 18.669 17.6441 18.669H19.8176C19.9585 18.669 20.0935 18.6131 20.1931 18.5135C20.2927 18.4139 20.3486 18.2788 20.3486 18.138C20.3486 17.9972 20.2927 17.8621 20.1931 17.7625C20.0935 17.6629 19.9585 17.607 19.8176 17.607V17.607ZM13.2285 16.3785L14.0115 14.4581L14.7292 16.3785H13.2285V16.3785ZM16.0669 16.9275L16.0691 16.9095C16.0689 16.7757 16.0178 16.647 15.9262 16.5495L14.7495 13.3995C14.7002 13.2494 14.6062 13.1179 14.4802 13.0226C14.3541 12.9273 14.202 12.8728 14.0441 12.8663C13.8851 12.8656 13.7296 12.9133 13.5984 13.0031C13.4672 13.093 13.3664 13.2206 13.3095 13.3691L11.4409 17.9535C11.4145 18.0181 11.4011 18.0872 11.4015 18.1569C11.4018 18.2267 11.4159 18.2956 11.4429 18.3599C11.4699 18.4242 11.5093 18.4826 11.5588 18.5317C11.6084 18.5807 11.6671 18.6196 11.7317 18.6459C11.7962 18.6723 11.8654 18.6857 11.9351 18.6854C12.0048 18.685 12.0738 18.6709 12.1381 18.6439C12.2024 18.6169 12.2608 18.5775 12.3099 18.528C12.3589 18.4784 12.3978 18.4197 12.4241 18.3551L12.7954 17.4405H15.1241L15.4605 18.3405C15.4834 18.4078 15.5195 18.4698 15.5668 18.5228C15.614 18.5759 15.6715 18.6189 15.7357 18.6494C15.7999 18.6798 15.8695 18.6971 15.9405 18.7001C16.0115 18.7031 16.0824 18.6919 16.149 18.6671C16.2155 18.6422 16.2764 18.6043 16.3281 18.5554C16.3797 18.5066 16.421 18.4479 16.4495 18.3829C16.4781 18.3178 16.4933 18.2477 16.4942 18.1766C16.4951 18.1056 16.4818 18.0351 16.455 17.9692L16.0669 16.9275V16.9275ZM12.3296 13.4648C12.3296 13.3241 12.2738 13.1892 12.1745 13.0897C12.0752 12.9901 11.9404 12.934 11.7998 12.9337H8.14913C8.0083 12.9337 7.87323 12.9897 7.77365 13.0893C7.67407 13.1889 7.61813 13.3239 7.61813 13.4648C7.61813 13.6056 7.67407 13.7406 7.77365 13.8402C7.87323 13.9398 8.0083 13.9958 8.14913 13.9958H9.45412V18.1988C9.45412 18.3396 9.51007 18.4746 9.60965 18.5742C9.70923 18.6738 9.8443 18.7298 9.98513 18.7298C10.126 18.7298 10.261 18.6738 10.3606 18.5742C10.4602 18.4746 10.5161 18.3396 10.5161 18.1988V13.9958H11.7986C11.9395 13.9958 12.0745 13.9398 12.1741 13.8402C12.2737 13.7406 12.3296 13.6056 12.3296 13.4648V13.4648Z" fill="#371C1D"/>
          </svg>
          Kakao 계정으로 가입하기
        </div>
      </div>
    </div>
  );
}

export { BaseData };