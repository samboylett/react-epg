// @flow
import * as React from 'react';
import Channel from './Channel';
import TimeIndicator from './TimeIndicator';
import { getForcedRange, getColSpan } from './helpers';

export type EPGProps = {
  start?: Date | number,
  end?: Date | number,
  minutes?: Array<number>,
  format?: (Date) => string,
  children: React.ChildrenArray<React.Element<typeof Channel>>
};

/**
 * Renders an EPG
 *
 * The `minutes` and `format` props are passed directly to the `TimeIndicator` private component
 *
 * @param {EPGProps} props
 * @param {Date | number} [props.start=void] - Force a start time to use, if omitted uses the earliest TimeSlot in any Channel
 * @param {Date | number} [props.end=void] - Force an end time to use, if omitted uses the latest TimeSlot in any Channel
 * @param {Array<number>} [props.minutes=void] - Override which times should be rendered in the header, based on minutes
 * @param {Function} [props.format=void] - Function to override rendering of times in the header
 * @param {React.ChildrenArray<Channel>} props.children - Channels to use in this EPG
 */
const EPG = ({
  start,
  end,
  children,
  ...rest
}: EPGProps) => {
  const range = getForcedRange(start, end, children);
  const colSpan = getColSpan(range.start, range.end);

  const cells = [];

  for (let i = 0; i <= colSpan; i++) {
    const time = ((range.end - range.start) * (i / colSpan)) + range.start;

    cells.push((
      <TimeIndicator key={time} time={time} {...rest} />
    ));
  }

  const channels = React.Children.map(children, channel =>
    React.cloneElement(
      channel,
      {
        ...channel.props,
        range
      },
      channel.props.children
    ));

  return (
    <table>
      <thead>
        <tr>
          <th />
          {cells}
        </tr>
      </thead>
      <tbody>
        {channels}
      </tbody>
    </table>
  );
};

export default EPG;
