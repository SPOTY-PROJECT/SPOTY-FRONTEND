import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {}
} as ComponentMeta<typeof Input>;

/**
 * # Input
 *
 * Input 컴포넌트는 label-string, placeHolder-string, tooltipContent-string, type-"normal", "pass", "warning" 를 받습니다.
 *
 * label은 해당 Input이 어떤 항목을 받을 지를 나타냅니다
 * placeHolder는 Input에 아무 글자도 있지 않을 때 나타내는 문자입니다
 * tooltipContent는 툴팁에 들어갈 내용입니다
 * type은 input의 상태를 변경할 수 있으며 노말은 border가 검정, pass는 초록, warning은 빨강으로 변경됩니다
 *
 * 레이아웃 작성시 범용으로 사용하기 좋도록 최저한의 스타일만 적용을 하였으며, 기본적인 사용은 아래 Template을 따릅니다.
 */

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}/>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  label: "이메일",
  placeHolder: "이메일을 입력해 주십시오",
  type: "normal",
  hide: false
};

export const ToolTipInput = Template.bind({});

ToolTipInput.args = {
  label: "비밀번호",
  placeHolder: "비밀번호를 입력해주세요.",
  toolTipContent: "영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요.",
  type: "normal",
  hide: true
};