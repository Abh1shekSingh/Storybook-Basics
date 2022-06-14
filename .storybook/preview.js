import React from "react"
import { addDecorator } from "@storybook/react"
import {withConsole} from "@storybook/addon-console" //add on to console log the data without opeing chrome developer console
import {withKnobs} from "@storybook/addon-knobs"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from "@storybook/addon-a11y";
import Center from "../src/stories/Center"

addDecorator(withKnobs)
addDecorator(withA11y)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
 
}

//Globally centering all the Stories
addDecorator((storyFn, context) => withConsole()(storyFn)(context)) //This line of statement will let me know in the console that which component from which directory is being taken into action (such as clicked, mouseover etc...)
addDecorator(story => <Center>{story()}</Center>) // Here we are globally centering the elements (components)

