import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToolTip } from "./ToolTip";

export default {
  title: "ToolTip",
  component: ToolTip,
  argTypes: {}
} as ComponentMeta<typeof ToolTip>;

/**
 * # ToolTip
 *
 * ToolTip 컴포넌트는 content-string dmf 받습니다.
 *
 * content는 툴팁의 내용읗 나타냅니다
 *
 * 레이아웃 작성시 범용으로 사용하기 좋도록 최저한의 스타일만 적용을 하였으며, 기본적인 사용은 아래 Template을 따릅니다.
 */

const Template: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args}/>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  content: <p>영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요.<br/>영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요.</p>
};

export const Default = Template.bind({});

Default.args = {
  content: <p>영문 대문자, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 사용하세요</p>
};