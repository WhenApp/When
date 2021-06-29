import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import tw, { styled } from 'twin.macro';

import { ListItemCard, ListItemContainer, ListItemTransition } from '../Card';
import Icons from '../Icons';
import { Swipeable } from '../Swipeable';

import { ReminderItem, Props } from './ReminderItem';

const IconWrapper = styled.div(() => [tw`text-gray-100`]);

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const START_DATE = new Date(2020, 0, 1);
const END_DATE = new Date(2022, 11, 31);

const reminders: Props[] = [
  {
    id: 'one',
    header: 'Reminder Item One',
    subheader: 'This is a reminder with a description',
    time: randomDate(START_DATE, END_DATE).toISOString(),
  },
  {
    id: 'two',
    header: 'Reminder Item Two',
    time: randomDate(START_DATE, END_DATE).toISOString(),
  },
  {
    id: 'three',
    header: 'Reminder Item Three',
    subheader: 'This is a reminder with a description',
    time: randomDate(START_DATE, END_DATE).toISOString(),
  },
  {
    id: 'four',
    header: 'Reminder Item Four',
    time: randomDate(START_DATE, END_DATE).toISOString(),
  },
];

export default {
  title: 'Design System/UI/ReminderItem',
  component: ReminderItem,
} as Meta;

const swipeAction = action('swiped');

const swipeableProps = {
  bgLeft: 'linear-gradient(120deg, #1F2937 0%, #6B7280 100%)',
  bgRight: 'linear-gradient(120deg,#f5576c 0%, #A52A2A 100%)',
  iconLeft: () => (
    <IconWrapper>
      <Icons.IconReset />
    </IconWrapper>
  ),
  iconRight: () => (
    <IconWrapper>
      <Icons.IconTrash />
    </IconWrapper>
  ),
};

const Template: Story<Props> = args => (
  <ListItemContainer>
    <ListItemCard>
      <ReminderItem {...args} />
    </ListItemCard>
  </ListItemContainer>
);

export const BasicReminderItem = Template.bind({});

BasicReminderItem.args = {
  ...reminders[0],
};

interface SwipeableProps {
  reminders: Props[];
}

export const SwipeableReminderItemList: Story<SwipeableProps> = args => {
  const [reminders, setReminders] = React.useState(args.reminders);

  const onSwipeLeft = (id: string) => {
    const newReminders = reminders.filter(reminder => reminder.id !== id);
    swipeAction('left');
    setReminders(newReminders);
  };

  const onSwipeRight = (id: string, reset: () => void) => {
    const newReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        reminder.time = new Date().toISOString();
      }

      return reminder;
    });

    setReminders(newReminders);
    swipeAction('right');

    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <ListItemContainer>
      {reminders.map(reminder => (
        <CSSTransition key={reminder.id} timeout={500} classNames="listItem">
          <Swipeable
            key={reminder.id}
            {...swipeableProps}
            onSwipeLeft={_ => onSwipeLeft(reminder.id)}
            onSwipeRight={reset => onSwipeRight(reminder.id, reset)}
          >
            <ListItemCard>
              <ReminderItem {...reminder} />
            </ListItemCard>
          </Swipeable>
        </CSSTransition>
      ))}
    </ListItemContainer>
  );
};

SwipeableReminderItemList.args = {
  reminders,
};
