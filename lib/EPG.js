// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import Channel from './Channel';
import { getForcedRange, getColSpan } from './helpers';

export type EPGProps = {
  start?: Date | number,
  end?: Date | number,
  children: React.ChildrenArray<React.Element<typeof Channel>>
};

const HOUR = 1000 * 60 * 60;

const EPG = ({ start, end, children }: EPGProps) => {
  const range = getForcedRange(start, end, children);
  const colSpan = getColSpan(range.start, range.end);

  const cells = [];

  for (let i = 0; i < colSpan; i++) {
    cells.push((
      <th>
      </th>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Channel
          </th>
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
