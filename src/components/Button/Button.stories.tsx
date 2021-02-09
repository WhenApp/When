import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button as ButtonComponent, ButtonProps } from './Button';
import Icons, { StyledIconContainer } from '../Icons';

export default {
  title: 'Design System/UI/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      description: 'The button variant',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'muted'],
      },
      defaultValue: 'primary',
    },
    size: {
      description: 'The size of the button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },
    isRounded: {
      description: 'Whether or not the button is rounded',
      type: 'boolean',
      defaultValue: false,
    },
    isCircular: {
      description: 'Whether or not the button is circular',
      type: 'boolean',
      defaultValue: false,
    },
    children: {
      description: 'The button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Button = (props: ButtonProps) => <ButtonComponent {...props} />;

export const IconButton = (props: ButtonProps) => (
  <ButtonComponent {...props} isCircular>
    <StyledIconContainer size={props.size}>
      <Icons.IconPlus />
    </StyledIconContainer>
  </ButtonComponent>
);
