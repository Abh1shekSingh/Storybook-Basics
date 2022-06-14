import React from "react";
import Button from "./Button";
import Center from "./Center";
import {text,boolean, withKnobs,number} from "@storybook/addon-knobs"



export default{
  title: "form/Button",
  component: Button,
  decorators: [story => <Center>{story()}</Center>, withKnobs] ,//Added Decorator to single story only.
  argTypes: {
    onClick: {action :"click"} //onClick event added on the buttons
  }
}

export const Primary = () => <Center><Button variant ="primary">Primary</Button></Center> //Added Decorator to single Component
// export const Secondary = () => <Button variant ="secondary">Seconday</Button>
// export const Success = () => <Button variant ="success">Success</Button>
// export const Danger = () => <Button variant ="danger">PrimaDangerry</Button>
export const Yellow = () => <Button variant="yellow" onClick = {() => console.log("Button Clicked", process.env.STORYBOOK_THEME)} >Yellow Button</Button> 
export const KnobsButton = () => {
  <Button variant="success" disabled={boolean("Disabled", false)}>
      {text("Label", "Knob Button")}
  </Button>
}

const Template = args => <Button {...args} />


export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant : 'primary',
  children : 'Primary Args'
}
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant : 'secondary',
  children : 'Primary Args'
}
export const SuccessA = Template.bind({});
SuccessA.args = {
  variant : 'success',
  children : 'Primary Args'
}
export const DangerA = Template.bind({});
DangerA.args = {
  variant : 'danger',
  children : 'Primary Args'
}


export const asDynamicVariables = () => {
  const name = text('Name', 'Abhishek');
  const age = number('Age', 20);
  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
};