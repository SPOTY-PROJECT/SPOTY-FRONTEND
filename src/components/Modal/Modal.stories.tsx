import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <div>hi</div>
  </Modal>
);

export const DefaultModal = Template.bind({});

DefaultModal.args = {
  onClick: () => console.log("hi")
};