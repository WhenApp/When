import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import tw, { styled } from 'twin.macro';

import Icons from './';
import { IconProps, StyledIconContainer } from './StyledIcon';

export default {
  title: 'Design System/UI/Icons',
  argTypes: {
    size: {
      description: 'The size of the icons',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'xl',
    },
  },
} as Meta;

const IconHolder = styled.div(() => [
  tw`flex flex-col items-center justify-center mx-1 my-1 font-mono text-xs subpixel-antialiased font-medium`,
  tw`p-3 bg-white rounded-md shadow`,
]);

export const AllIcons = ({ size }: IconProps) => (
  <>
    {Object.keys(Icons).map(iconKey => {
      const Icon = Icons[iconKey];
      return (
        <IconHolder>
          <StyledIconContainer size={size}>
            <Icon />
          </StyledIconContainer>
          <span tw="mt-1">{iconKey}</span>
        </IconHolder>
      );
    })}
  </>
);
