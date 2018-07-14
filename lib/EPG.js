// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import Channel from './Channel';
import { getForcedRange } from './helpers';

export type EPGProps = {
  start?: Date | number,
  end?: Date | number,
  children: React.ChildrenArray<React.Element<typeof Channel>>
};

const EPG = ({ start, end, children }: EPGProps) => {
  const range = getForcedRange(start, end, children);

  console.log(range);

  return (
    <table>
      <thead>
        <tr>
          <th>
          </th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default EPG;
