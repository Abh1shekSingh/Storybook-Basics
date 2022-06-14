import React from "react";
import Input from "./Input";

export default {
    title: "form/Input",
    component: Input
}

export const Small = () => <Input variant="small" placeholder="Small"></Input>
export const Large = () => <Input variant="large" placeholder="large"></Input>
export const Medium = () => <Input variant="medium" placeholder="Medium"></Input>

Small.storyName = "Small Size Input"