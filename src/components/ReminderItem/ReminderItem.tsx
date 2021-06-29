import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { formatDuration } from 'date-fns';

import { useUpdatingTime } from '../../hooks/useUpdatingTime';

export interface Props {
  header: string;
  subheader?: string;
  time: string;
  href: string;
}

const Container = styled.div(() => [tw`flex`]);

const TextContainer = styled.div(() => [
  tw`flex items-center justify-between flex-1 px-4 py-2 text-sm truncate bg-white rounded-r-md`,
]);

const FlexColumn = styled.div(() => [tw`flex-1`]);

const Header = styled.a(() => [
  tw`font-medium text-gray-900 hover:text-gray-600`,
]);

const Subheader = styled.div(() => [tw`text-gray-500`]);

export const ReminderItem: React.FC<Props> = (props: Props) => {
  const { time, duration } = useUpdatingTime({ time: props.time });

  const formattedDurationDaysPlus = formatDuration(duration, {
    format: ['years', 'months', 'days'],
    delimiter: ', ',
  });
  const formattedDuration = `${duration.hours}:${duration.minutes}:${duration.seconds}`;

  return (
    <Container>
      <TextContainer>
        <FlexColumn>
          <Header href={props.href}>{props.header}</Header>
          <Subheader>{props.subheader}</Subheader>
        </FlexColumn>
        <FlexColumn>
          <Subheader>{formattedDurationDaysPlus}</Subheader>
          <Subheader>{formattedDuration}</Subheader>
        </FlexColumn>
      </TextContainer>
    </Container>
  );
};

export default ReminderItem;
