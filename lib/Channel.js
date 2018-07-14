// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import { dateToNumber, numberToDate } from './helpers';

export type ChannelProps = {
  range?: {
    start: Date | number,
    end: Date | number
  },
  name: string,
  children: React.ChildrenArray<React.Element<typeof TimeSlot>>
};

const Channel = ({ name, children, range }: ChannelProps) => {
  const timeSlots = React.Children.toArray(children);

  if (range) {
    if (range.start < timeSlots[0].props.start) {
      timeSlots.unshift((
        <TimeSlot
          start={numberToDate(range.start)}
          end={numberToDate(dateToNumber(timeSlots[0].props.start) - 60000)}
        />
      ));
    }
  }

  return (
    <tr>
      <th>
        {name}
      </th>
      {timeSlots}
    </tr>
  );
};

export default Channel;
