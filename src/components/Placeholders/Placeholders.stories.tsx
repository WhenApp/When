import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { DashedLinePlaceholder, Props } from './DashedLinePlaceholder';

export default {
  title: 'Design System/UI/Placeholders',
  component: DashedLinePlaceholder,
} as Meta;

const Template: Story<Props> = args => <DashedLinePlaceholder {...args} />;

export const DashedLine = Template.bind({});

DashedLine.args = {
  height: '100px',
};
