import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DropDown } from "./DropDown";

export default {
  title: "DropDown",
  component: DropDown,
  argTypes: {}
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args}/>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  title: "성별",
  placeHolder: "성별을 선택해주십시오",
  option: ["남자", "여자"]
};