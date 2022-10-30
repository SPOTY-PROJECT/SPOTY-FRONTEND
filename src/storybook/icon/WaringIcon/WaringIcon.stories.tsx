import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WaringIcon } from "./WaringIcon";

export default {
  title: "Icon/WaringIcon",
  component: WaringIcon,
  argTypes: {}
} as ComponentMeta<typeof WaringIcon>;

const Template: ComponentStory<typeof WaringIcon> = (args) => (
  <WaringIcon/>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
};