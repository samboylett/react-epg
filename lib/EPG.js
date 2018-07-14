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

const EPG = ({ start, end, children, ...rest }: EPGProps) => {
  const range = getForcedRange(start, end, children);
  const colSpan = getColSpan(range.start, range.end);

  const cells = [];

  for (let i = 0; i <= colSpan; i++) {
    const time = ((range.end - range.start) * (i / colSpan)) + range.start;

    cells.push((
      <TimeIndicator time={time} {...rest} />
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th />
          {cells}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default EPG;
