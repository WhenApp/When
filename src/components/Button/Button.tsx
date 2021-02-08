import tw, { styled } from 'twin.macro';

export interface ButtonProps {
  isCircular?: boolean;
  isRounded?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'muted';
}

export const Button = styled.button<ButtonProps>(
  ({
    isCircular = false,
    isRounded = false,
    size = 'md',
    variant = 'primary',
  }) => [
    // base button styles
    tw`px-2.5 py-1.5 text-xs inline-flex items-center justify-center`,
    tw`font-medium text-center text-white border border-transparent rounded shadow-sm`,
    tw`bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,

    // size variants
    size === 'sm' && tw`px-3 py-2 text-sm`,
    size === 'md' && tw`px-4 py-2 text-sm`,
    size === 'lg' && tw`px-4 py-2 text-base`,
    size === 'xl' && tw`px-6 py-3 text-base`,

    // color variants
    variant === 'secondary' &&
      tw`text-indigo-700 bg-indigo-100 hover:bg-indigo-200`,
    variant === 'muted' &&
      tw`text-gray-700 bg-white border border-gray-300 hover:bg-gray-50`,

    // rounded version
    isRounded && tw`rounded-full`,

    // circular version
    isCircular && tw`p-1 rounded-full`,
  ],
);
