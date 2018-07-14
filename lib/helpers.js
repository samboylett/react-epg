// @flow
import * as React from 'react';
import TimeSlot from './TimeSlot';
import Channel from './Channel';

export const dateToNumber = (date: Date | number): number =>
  typeof date === 'number' ? date : date.getTime();

export const getColSpan = (start: Date | number, end: Date | number): number =>
  dateToNumber(end) - dateToNumber(start);

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
      range.start = Math.min(range.start, dateToNumber(timeSlot.props.start));
      range.end = Math.max(range.end, dateToNumber(timeSlot.props.end));
    });
  });

  return range;
};
