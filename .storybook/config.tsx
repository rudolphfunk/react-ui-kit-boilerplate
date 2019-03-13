import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import themeDecorator from './theme-decorator';

addParameters({
  options: {
    isFullscreen: false,
    panelPosition: "right",
    theme: create({
      base: "light",
      brandTitle: "React UI Kit",
      brandUrl: "https://leandrooriente.github.io/react-ui-kit-boilerplate",
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
  },
});

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
