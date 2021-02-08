import * as React from 'react';
import tw from 'twin.macro';
import { Button } from './components';

const App = () => (
  <div>
    <div css={[tw`flex flex-col items-center justify-center h-screen`]}>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button variant="primary" size="xl">
          Submit
        </Button>
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
        <Button variant="muted" size="xs">
          Close
        </Button>
      </div>
    </div>
  </div>
);

export default App;
