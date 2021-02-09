import * as React from 'react';
import tw, { styled } from 'twin.macro';

export interface IconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface StyledIconProps extends IconProps {
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const StyledIconContainer = styled.div<StyledIconProps>(
  ({ size = 'md' }) => [
    size === 'xs' && tw`w-5 h-5`,
    size === 'sm' && tw`w-6 h-6`,
    size === 'md' && tw`w-7 h-7`,
    size === 'lg' && tw`w-8 h-8`,
    size === 'xl' && tw`w-10 h-10`,
  ],
);
