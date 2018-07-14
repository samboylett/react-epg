// @flow
import * as React from 'react';
import Show from './Show';
import { getColSpan } from './helpers';

export type TimeSlotProps = {
  start: Date | number,
  end: Date | number,
  children?: React.Element<typeof Show>
};

/**
 * Component to render a time slot in a channel
 *
 * @param {TimeSlotProps} props
 * @param {Date | number} props.start - Start time of the slot
 * @param {Date | number} props.end - End time of the slot
 * @param {React.Node} props.children - Contents for this time slot, typically a `Show`
 */
const TimeSlot = ({ children, start, end }: TimeSlotProps) => (
  <td colSpan={getColSpan(start, end)}>
    {children}
  </td>
);

export default TimeSlot;
