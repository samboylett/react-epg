// @flow
import * as React from 'react';
import Show from './Show';
import { getColSpan } from './helpers';

export type TimeSlotProps = {
  start: Date,
  end: Date,
  children: React.Element<typeof Show>
};

const TimeSlot = ({ children, start, end }: TimeSlotProps) => {
  return (
    <td colspan={getColSpan(start, end)}>
      {children}
    </td>
  );
};

export default TimeSlot;
