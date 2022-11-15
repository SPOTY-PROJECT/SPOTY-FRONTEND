import React from "react";
import classNames from "classnames/bind";
import styles from "./Information.module.scss";
import { Logo } from "../../storybook/icon/Logo/Logo";
import { Input } from "../../storybook/Input/Input";
import { Button } from "../../storybook/Button/Button";
import { DropDown } from "../../storybook/DropDown/DropDown";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Information = () => {
  const navigate = useNavigate();
  const onNext = () => {
    navigate(`/Complete`);
  };
  return (
    <div className={cx("Information")}>
      <Logo/>
      <p className={cx("PageName")}>원활한 서비스 이용을 위해 추가 정보를 입력해주세요.</p>
      <div className={cx("InformationWrapper")}>
        <Input label={"이름"} placeHolder={"이름을 입력해주세요."} type={"normal"} hide={false}></Input>
        <DropDown title={"성별"} option={["남", "여"]} placeHolder={"성별을 선택 해주세요"} onChange={() => {}}></DropDown>
        <div className={cx("YearMonthDay")}>생년월일</div>
        <div className={cx("BirthWrapper")}>
          <div className={cx("YearWrapper")}>
            <Input label={""} placeHolder={"YYYY"} type={"normal"} hide={false}></Input>
            <p>년</p>
          </div>
          <div className={cx("MonthWrapper")}>
            <Input label={""} placeHolder={"MM"} type={"normal"} hide={false}></Input>
            <p>월</p>
          </div>
          <div className={cx("DayWrapper")}>
            <Input label={""} placeHolder={"DD"} type={"normal"} hide={false}></Input>
            <p>일</p>
          </div>
        </div>
        <Input label={"닉네임"} placeHolder={"닉네임을 입력해주세요."} type={"normal"} hide={false}></Input>
        <div className={cx("AreaTag")}>주 활동 지역</div>
        <div className={cx("Area")}>
          <DropDown title={""} option={["", ""]} placeHolder={"도/특별시/광역시"} onChange={() => {}}></DropDown>
          <DropDown title={""} option={["", ""]} placeHolder={"시/군/구"} onChange={() => {}}></DropDown>
        </div>
        <DropDown title={"선호 포지션"} option={["", ""]} placeHolder={"선호 포지션을 선택해주세요."} onChange={() => {}}></DropDown>
        <DropDown title={"선출 여부"} option={["네", "아니오"]} placeHolder={"선축 여부를 선택해주세요."} onChange={() => {}}></DropDown>
        <Button content={"가입하기"} onClick={onNext}></Button>
      </div>
    </div>
  );
};

export default Information;