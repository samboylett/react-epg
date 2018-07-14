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

  for (let i = 0; i < (timeSlots.length - 1); i++) {
    const end = dateToNumber(timeSlots[i].props.end);
    const start = dateToNumber(timeSlots[i + 1].props.start) - 60000;
    if (end === start) continue;

    i++;
    timeSlots.splice(i, 0, (
      <TimeSlot
        start={numberToDate(end + 60000)}
        end={numberToDate(start)}
      />
    ));
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
