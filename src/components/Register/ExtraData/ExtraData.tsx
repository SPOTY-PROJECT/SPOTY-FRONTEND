import React  from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import { Logo } from "storybook/icon/Logo/Logo";
import { Input } from "../../../storybook/Input/Input";
import { Button } from "../../../storybook/Button/Button";
import { DropDown } from "../../../storybook/DropDown/DropDown";

import styles from "./ExtraData.module.scss";

const cx = classNames.bind(styles);

function ExtraData () {
  const navigator = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const self = params.get("self");

  return(
    <div className={cx("CheckEmail")}>
      <Logo/>
      <p>원활한 서비스 이용을 위해 추가 정보를 입력해 주세요.</p>
      <div className={cx("input-wrapper")}>
        {self && <Input label={"이름"} placeHolder={"이름을 입력해 주세요."} type={"normal"} hide={false} onChange={(e:any) => console.log(e.currentTarget.value)}/>}
        {self && <DropDown title={"성별"} option={["남", "여"]} placeHolder={"성별을 선택해주세요."} onChange={(e:any) => console.log(e.currentTarget.value)}/>}
        {self &&
        <div className={cx("birth-day")}>
          <div className={cx("birth-day-title")}>생년월일</div>
          <div className={cx("wrapper")}>
            <div className={cx("select")}>
              <Input label={""} placeHolder={"YYYY"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.currentTarget.value)}/>
              <p>년</p>
            </div>
            <div className={cx("select")}>
              <Input label={""} placeHolder={"MM"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.currentTarget.value)}/>
              <p>월</p>
            </div>
            <div className={cx("select")}>
              <Input label={""} placeHolder={"DD"} type={"normal"} hide={false} onChange={(e:any) => console.log(e.currentTarget.value)}/>
              <p>일</p>
            </div>
          </div>
        </div>
        }
        <Input label={"닉네임"} placeHolder={"닉네임을 입력해 주세요."} type={"normal"} hide={false} onChange={(e:any) => console.log(e.currentTarget.value)}/>
        <div className={cx("area")}>
          <div className={cx("title")}>생년월일</div>
          <div className={cx("wrapper")}>
            <DropDown title={""} option={["남", "여"]} placeHolder={"도/특별시/광역시"} onChange={(e:any) => console.log(e.currentTarget)}/>
            <DropDown title={""} option={["남", "여"]} placeHolder={"시/군/구"} onChange={(e:any) => console.log(e.currentTarget)}/>
          </div>
        </div>
        <DropDown
          title={"선호 포지션"}
          option={["남", "여"]}
          placeHolder={"선호 포지션을 선택해주세요."}
          onChange={(e:any) => console.log(e.currentTarget)}
        />
        <DropDown
          title={"선출 여부"}
          option={["남", "여"]}
          placeHolder={"선출 여부를 선택해주세요."}
          onChange={(e:any) => console.log(e.currentTarget)}
          toolTipContent={<p>초, 중, 고, 대학 등 선수 경험이 있으신가요?<br/>공정한 스포츠 문화를 위해 선출 여부를 선택해주세요.</p>}
        />
      </div>
      <Button content={"가입하기"} onClick={() => navigator("/finish")}/>
    </div>
  );
}

export { ExtraData };