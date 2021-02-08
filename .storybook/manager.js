import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'WhenApp Component Library',
  brandUrl: '/',
  brandImage: 'https://i.imgur.com/nK1LVWY.png',
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
