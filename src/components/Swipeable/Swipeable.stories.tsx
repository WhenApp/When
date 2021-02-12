import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';
import tw, { styled } from 'twin.macro';

import { Swipeable, Props } from './';
import Icons from '../Icons';
import { ListItemCard, ListItemContainer } from '../Card';
import { DashedLinePlaceholder } from '../Placeholders';

const IconWrapper = styled.div(() => [tw`text-gray-100`]);
const ListItemWrapper = styled.ul(() => [tw`w-full h-full`]);

export default {
  title: 'Design System/UI/Controls',
  component: Swipeable,
  argTypes: {
    bgLeft: {
      description:
        'The background for swiping to the right (shows starting from the left)',
      defaultValue: 'linear-gradient(120deg, #1F2937 0%, #6B7280 100%)',
      type: { name: 'text', required: true },
    },
    bgRight: {
      description:
        'The background for swiping to the left (shows starting from the right)',
      defaultValue: 'linear-gradient(120deg,#f5576c 0%, #A52A2A 100%)',
      type: { name: 'text', required: true },
    },
    iconLeft: {
      control: false,
    },
    iconRight: {
      control: false,
    },
  },
} as Meta;

const iconProps = {
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

const swipeAction = action('swiped');

const onSwipe = (reset: () => void, direction: string) => {
  swipeAction(direction);
  setTimeout(reset, 1500);
};

const actionsProps = {
  onSwipeLeft: (reset: () => void) => {
    onSwipe(reset, 'left');
  },
  onSwipeRight: (reset: () => void) => {
    onSwipe(reset, 'right');
  },
};

export const SwipeableComponent = (props: Props) => (
  <Swipeable {...props} {...iconProps} {...actionsProps}>
    <ListItemWrapper>
      <ListItemCard>
        <DashedLinePlaceholder height="100%" />
      </ListItemCard>
    </ListItemWrapper>
  </Swipeable>
);

export const SwipeableList: React.VFC<Props> = props => (
  <ListItemContainer>
    <Swipeable {...props} {...iconProps} {...actionsProps}>
      <ListItemCard>
        <DashedLinePlaceholder height="100%" />
      </ListItemCard>
    </Swipeable>
    <Swipeable {...props} {...iconProps} {...actionsProps}>
      <ListItemCard>
        <DashedLinePlaceholder height="100%" />
      </ListItemCard>
    </Swipeable>
    <Swipeable {...props} {...iconProps} {...actionsProps}>
      <ListItemCard>
        <DashedLinePlaceholder height="100%" />
      </ListItemCard>
    </Swipeable>
  </ListItemContainer>
);
