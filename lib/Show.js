// @flow
import * as React from 'react';

export type ShowProps = {
  title: string
};

/**
 * Component to render a show within a TimeSlot
 *
 * @param {ShowProps} props
 * @param {string} props.title - Title of the Show
 */
const Show = ({ title }: ShowProps) => (
  <div>
    {title}
  </div>
);

export default Show;
