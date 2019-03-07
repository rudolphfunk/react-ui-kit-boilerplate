import { addDecorator, addParameters, configure } from "@storybook/react";
import themeDecorator from "./theme-decorator";
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React UI Kit',
      brandUrl: 'hhttps://leandrooriente.github.io/react-ui-kit-boilerplate',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
});

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
