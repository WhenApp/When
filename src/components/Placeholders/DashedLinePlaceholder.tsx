import tw, { css, styled } from 'twin.macro';

export interface Props {
  height?: string;
}

export const DashedLinePlaceholder = styled.div<Props>(({ height = null }) => [
  tw`block w-full h-16 text-gray-200 bg-white border-2 border-gray-300 border-dashed rounded`,
  height !== null &&
    css`
      height: ${height};
    `,
]);
