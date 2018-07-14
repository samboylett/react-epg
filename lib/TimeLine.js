// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import { dateToNumber, numberToDate } from './helpers';

export type TimeLineProps = {
  range?: {
    start: Date | number,
    end: Date | number
  },
  channel: React.Node,
  children: React.ChildrenArray<React.Element<typeof TimeSlot>>
};

/**
 * Component to render a time line row
 *
 * @param {TimeLineProps} props
 * @param {React.Node} props.channel - The channel for this time line
 * @param {React.ChildrenArray<TimeSlot>} props.children - TimeSlots for this time line
 */
const TimeLine = ({ channel, children, range }: TimeLineProps) => {
  const timeSlots = React.Children.toArray(children);

  if (range) {
    if (range.start < timeSlots[0].props.start) {
      timeSlots.unshift((
        <TimeSlot
          start={numberToDate(range.start)}
          end={numberToDate(dateToNumber(timeSlots[0].props.start))}
        />
      ));
    }
  }

  const parsedTimeSlots = [];

  for (let i = 0; i < (timeSlots.length - 1); i++) {
    parsedTimeSlots.push(timeSlots[i]);

    const end = dateToNumber(timeSlots[i].props.end);
    const start = dateToNumber(timeSlots[i + 1].props.start);
    if (end === start) continue;

    parsedTimeSlots.push((
      <TimeSlot
        start={numberToDate(end)}
        end={numberToDate(start)}
      />
    ));
  }

  parsedTimeSlots.push(timeSlots.slice(-1)[0]);

  return (
    <tr>
      <th>
        {channel}
      </th>
      {parsedTimeSlots}
    </tr>
  );
};

export default TimeLine;
