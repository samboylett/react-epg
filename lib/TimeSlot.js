// @flow
import * as React from 'react';
import Show from './Show';

export type TimeSlotProps = {
  start: Date,
  end: Date,
  children: React.Element<typeof Show>
};

const TimeSlot = ({ children, start, end }: TimeSlotProps) => {
  const colSpan = end.getTime() - start.getTime();

  return (
    <td colspan={colSpan}>
      {children}
    </td>
  );
};

export default TimeSlot;
