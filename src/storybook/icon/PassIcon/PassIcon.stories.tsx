import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PassIcon } from "./PassIcon";

export default {
  title: "Icon/PassIcon",
  component: PassIcon,
  argTypes: {}
} as ComponentMeta<typeof PassIcon>;

const Template: ComponentStory<typeof PassIcon> = (args) => (
  <PassIcon/>
);

export const DefaultPassIcon = Template.bind({});

DefaultPassIcon.args = {
};