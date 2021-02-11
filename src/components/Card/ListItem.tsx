import tw, { styled } from 'twin.macro';

export const ListItemContainer = styled.ul(() => [tw`flex-grow space-y-3`]);

export const ListItemCard = styled.li(() => [
  tw`h-full px-6 py-4 overflow-hidden bg-white rounded-md shadow`,
]);
