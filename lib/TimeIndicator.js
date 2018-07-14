// @flow
import * as React from 'react';
import { numberToDate } from './helpers';

export type TimeIndicatorProps = {
  time: Date | number,
  minutes: Array<number>,
  format: (Date) => string
};

/**
 * Component to render a time indicator in the EPG header
 *
 * @private
 *
 * @param {TimeIndicatorProps} props
 * @param {Date | number} props.time - Time this cell represents
 * @param {Array<number>} [props.minutes=[0]] - Time minutes which should be shown, defaults to `[0]`
 * @param {Function} [props.format=Function] - Formatter for a time, if it is shown
 */
const TimeIndicator = ({ time, minutes, format }: TimeIndicatorProps) => {
  const date = numberToDate(time);
  let indicator = null;

  if (minutes.includes(date.getMinutes())) {
    indicator = (
      <div style={{ whiteSpace: 'nowrap', width: '1px' }}>
        {format(date)}
      </div>
    );
  }

  return (
    <th style={{ width: '1px' }}>
      {indicator}
    </th>
  );
};

TimeIndicator.defaultProps = {
  minutes: [0],
  format: (date: Date) => [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0')
  ].join(':')
};

export default TimeIndicator;
