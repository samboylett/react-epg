// @flow
import * as React from 'react';
import { numberToDate } from './helpers';

export type TimeIndicatorProps = {
  time: Date | number
};

const TimeIndicator = ({ time }: TimeIndicatorProps) => {
  const date = numberToDate(time);
  let indicator = null;

  if (date.getMinutes() === 0) {
    indicator = `${date.getHours()}:00`;
  }

  return (
    <th>
      {indicator}
    </th>
  );
};

export default TimeIndicator;
