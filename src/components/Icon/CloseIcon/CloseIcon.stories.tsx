import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CloseIcon } from "./CloseIcon";

export default {
  title: "Icon/CloseIcon",
  component: CloseIcon,
  argTypes: {}
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon/>
);

export const DefaultCloseIcon = Template.bind({});

DefaultCloseIcon.args = {
};