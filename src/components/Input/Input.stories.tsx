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
 * Input 컴포넌트는 label-string, placeHolder-string, tooltip-boolean, type-"normal", "pass", "warning" 를 받습니다.
 *
 * label은 해당 Input이 어떤 항목을 받을 지를 나타냅니다
 * placeHolder는 Input에 아무 글자도 있지 않을 때 나타내는 문자입니다
 * tooltip은 호버 툴팁의 유무를 나타냅니다
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
  toolTip: false,
  type: "normal"
};