import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { formatDuration, isFuture } from 'date-fns';

import { useUpdatingTime } from '../../hooks/useUpdatingTime';

export interface Props {
  id: string;
  header: string;
  subheader?: string;
  time: string;
}

const Container = styled.div(() => [tw`flex flex-grow`]);

const TextContainer = styled.div(() => [
  tw`flex items-center justify-between flex-1 px-4 py-2 text-sm truncate bg-white rounded-r-md`,
]);

const FlexColumn = styled.div(() => [tw`flex-1`]);

const Header = styled.div(() => [
  tw`font-medium text-gray-900 hover:text-gray-600`,
]);

const Subheader = styled.div(() => [tw`text-gray-500`]);

const padNumber = (num?: number) => num?.toString().padStart(2, '0');

export const ReminderItem: React.FC<Props> = (props: Props) => {
  const { date, duration } = useUpdatingTime({ time: props.time });

  const isInFuture = isFuture(date);

  const formattedDurationDate = formatDuration(duration, {
    format: ['years', 'months', 'days'],
    delimiter: ', ',
  });
  const formattedDurationTime = `${
    isInFuture && !formattedDurationDate.length ? 'in ' : ''
  }${padNumber(duration.hours)}:${padNumber(duration.minutes)}:${padNumber(
    duration.seconds,
  )}`;

  return (
    <Container>
      <TextContainer>
        <FlexColumn>
          <Header>{props.header}</Header>
          <Subheader>{props.subheader}</Subheader>
        </FlexColumn>
        <FlexColumn tw="content-end text-right">
          <Subheader>
            {isInFuture && formattedDurationDate.length ? 'in ' : null}
            {formattedDurationDate}
          </Subheader>
          <Subheader>{formattedDurationTime}</Subheader>
        </FlexColumn>
      </TextContainer>
    </Container>
  );
};

export default ReminderItem;
