import React from 'react';
import tw, { GlobalStyles, styled } from 'twin.macro';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#f3f4f6' },
      { name: 'dark', value: '#374151' },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

const StoryContainer = styled.div(() => [
  tw`flex flex-wrap items-center justify-center h-full max-w-xl px-4 mx-auto`,
]);

export const decorators = [
  Story => (
    <StoryContainer>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Story />
      </CacheProvider>
    </StoryContainer>
  ),
];
