import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "reviewpopup/Button",
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>;

/**
 * # PopupHeader
 *
 * PopupHeader 컴포넌트는 title: string, color?: "yellow" | undefined 를 받습니다.
 *
 * title은 해당 헤더가 사용될 위치의 타이틀을 작성합니다.
 * color은 현재 yellow 하나만 받는데 yellow를 넣으면 헤더의 색을 노란색으로 변경합니다.
 * 후에 헤더 컴포넌트의 색이 추가된다면 타입도 추가될 것입니다.
 *
 * 레이아웃 작성시 범용으로 사용하기 좋도록 최저한의 스타일만 적용을 하였으며, 기본적인 사용은 아래 Template을 따릅니다.
 */

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}/>
);

export const DefaultTap = Template.bind({});

DefaultTap.args = {
  title: "배송완료 상품",
  color: "yellow"
};

export const TestTap = Template.bind({});

TestTap.args = {
  title: "리뷰 남기기"
};