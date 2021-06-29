import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListItemCard, ListItemContainer } from '../Card';

import { ReminderItem, Props } from './ReminderItem';

const reminder: Props = {
  header: 'Reminder Item!',
  subheader: 'This is a reminder with a description',
  time: '2021-06-29T01:30:03.456Z',
  href: '#',
};

export default {
  title: 'Design System/UI/ReminderItem',
  component: ReminderItem,
} as Meta;

const Template: Story<Props> = args => (
  <ListItemContainer>
    <ListItemCard>
      <ReminderItem {...args} />
    </ListItemCard>
  </ListItemContainer>
);

export const BasicReminderItem = Template.bind({});

BasicReminderItem.args = {
  ...reminder,
};
