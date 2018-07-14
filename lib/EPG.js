// @flow
import * as React from 'react';
import Channel from './Channel';

type EPGProps = {
  start?: Date,
  end?: Date,
  children: React.ChildrenArray<React.Element<Channel>>
};

const EPG = ({ children }: EPGProps) => {
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
