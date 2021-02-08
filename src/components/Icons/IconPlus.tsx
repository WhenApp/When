import * as React from 'react';
import tw, { styled } from 'twin.macro';

const IconPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

interface StyledIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const StyledIconPlus = styled(IconPlus)<StyledIconProps>(({ size = 'md' }) => [
  size === 'xs' && tw`w-5 h-5`,
  size === 'sm' && tw`w-6 h-6`,
  size === 'md' && tw`w-7 h-7`,
  size === 'lg' && tw`w-8 h-8`,
  size === 'xl' && tw`w-10 h-10`,
]);

const MemoIconPlus = React.memo(StyledIconPlus);
export default MemoIconPlus;
