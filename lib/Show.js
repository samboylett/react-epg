// @flow
import * as React from 'react';

/**
 * Props for the Show component
 */
export type ShowProps = {
  /**
   * Title of the show
   */
  title: string
};

/**
 * Component to render a show within a TimeSlot
 *
 * @param {ShowProps} props
 * @param {string} title - Title of the Show
 */
const Show = ({ title }: ShowProps) => (
  <div>
    {title}
  </div>
);

export default Show;
