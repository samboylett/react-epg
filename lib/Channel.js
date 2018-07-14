// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';

export type ChannelProps = {
  name: string,
  children: React.ChildrenArray<React.Element<typeof TimeSlot>>
};

const Channel = ({ name, children }: ChannelProps) => (
  <tr>
    <th>
      {name}
    </th>
    {children}
  </tr>
);

export default Channel;
