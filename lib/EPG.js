// @flow
import * as React from 'react';
import TimeLine from './TimeLine';
import TimeIndicator from './TimeIndicator';
import { getForcedRange, getColSpan } from './helpers';

export type EPGProps = {
  start?: Date | number,
  end?: Date | number,
  minutes?: Array<number>,
  format?: (Date) => string,
  headerSpan: number,
  children: React.ChildrenArray<React.Element<typeof TimeLine>>
};

/**
 * Renders an EPG
 *
 * The `minutes` and `format` props are passed directly to the `TimeIndicator` private component
 *
 * @param {EPGProps} props
 * @param {Date | number} [props.start=void] - Force a start time to use, if omitted uses the earliest TimeSlot in any TimeLine
 * @param {Date | number} [props.end=void] - Force an end time to use, if omitted uses the latest TimeSlot in any TimeLine
 * @param {Array<number>} [props.minutes=void] - Override which times should be rendered in the header, based on minutes
 * @param {Function} [props.format=void] - Function to override rendering of times in the header
 * @param {number} [props.headerSpan=1] - `colSpan` to use for the header of the channel column. This allows you to add extra columns to the left, e.g. for a channel number
 * @param {React.ChildrenArray<TimeLine>} props.children - TimeLines to use in this EPG
 */
const EPG = ({
  start,
  end,
  headerSpan,
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

  const channels = React.Children.map(children, timeLine =>
    React.cloneElement(
      timeLine,
      {
        ...timeLine.props,
        range
      },
      timeLine.props.children
    ));

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={headerSpan} />
          {cells}
        </tr>
      </thead>
      <tbody>
        {channels}
      </tbody>
    </table>
  );
};

EPG.defaultProps = {
  headerSpan: 1
};

export default EPG;
