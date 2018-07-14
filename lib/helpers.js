// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import Channel from './Channel';

export const getColSpan = (start: Date, end: Date): number =>
  end.getTime() - start.getTime();

export type Range = {
  start: number,
  end: number
};

export const getRange = (channels: React.ChildrenArray<React.Element<typeof Channel>>): Range => {
  const range: Range = {
    start: Infinity,
    end: -Infinity
  };

  React.Children.toArray(channels).forEach((channel: React.Element<typeof Channel>) => {
    React.Children.toArray(channel.props.children).forEach((timeSlot: React.Element<typeof TimeSlot>) => {
      range.start = Math.min(range.start, timeSlot.props.start.getTime());
      range.end = Math.max(range.end, timeSlot.props.end.getTime());
    });
  });

  return range;
};
