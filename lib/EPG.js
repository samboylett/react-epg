// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import Channel from './Channel';
import { getRange } from './helpers';

export type EPGProps = {
  start?: Date,
  end?: Date,
  children: React.ChildrenArray<React.Element<typeof Channel>>
};

const EPG = ({ children }: EPGProps) => {
  const range = getRange(children);

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
