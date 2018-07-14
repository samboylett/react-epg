// @flow
import * as React from 'react';
import { numberToDate } from './helpers';

export type TimeIndicatorProps = {
  time: Date | number,
  minutes: Array<number>,
  format: (Date) => string
};

const TimeIndicator = ({ time, minutes, format }: TimeIndicatorProps) => {
  const date = numberToDate(time);
  let indicator = null;

  if (minutes.includes(date.getMinutes())) {
    indicator = format(date);
  }

  return (
    <th>
      {indicator}
    </th>
  );
};

TimeIndicator.defaultProps = {
  minutes: [0],
  format: (date: Date) =>
    `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
};

export default TimeIndicator;
