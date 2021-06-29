import * as React from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import intervalToDuration from 'date-fns/intervalToDuration';

import useInterval from './useInterval';

interface Props {
  time: string;
}

export const useUpdatingTime = ({ time }: Props) => {
  const [date] = React.useState(new Date(time));
  const [timeString, setTimeString] = React.useState<string>(
    formatDistanceToNowStrict(new Date(time), { addSuffix: true }),
  );
  const [duration, setDuration] = React.useState(
    intervalToDuration({ start: new Date(time), end: Date.now() }),
  );

  useInterval(() => {
    const newTimeString = formatDistanceToNowStrict(new Date(time), {
      addSuffix: true,
    });
    const newDuration = intervalToDuration({
      start: new Date(time),
      end: Date.now(),
    });

    setTimeString(newTimeString);
    setDuration(newDuration);
  }, 250);

  return { time: timeString, date, duration };
};
