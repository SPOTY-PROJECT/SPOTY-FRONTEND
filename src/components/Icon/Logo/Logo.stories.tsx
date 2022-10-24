import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  title: "Icon/Logo",
  component: Logo,
  argTypes: {}
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo/>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
};