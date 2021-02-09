import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { ListItemCard, ListItemContainer } from './ListItem';
import { DashedLinePlaceholder } from '../Placeholders';

export default {
  title: 'Design System/UI/Cards',
  component: ListItemCard,
} as Meta;

export const ListItem: React.VFC<{}> = () => (
  <ListItemContainer>
    <ListItemCard>
      <DashedLinePlaceholder />
    </ListItemCard>
  </ListItemContainer>
);

export const MultipleListItems: React.VFC<{}> = () => (
  <ListItemContainer>
    <ListItemCard>
      <DashedLinePlaceholder />
    </ListItemCard>
    <ListItemCard>
      <DashedLinePlaceholder />
    </ListItemCard>
    <ListItemCard>
      <DashedLinePlaceholder />
    </ListItemCard>
  </ListItemContainer>
);
