// @flow
import * as React from 'react';

/** @memberOf Show */
export type ShowProps = {
  /**
   * Title of the show
   */
  title: string
};

/**
 * Component to render a show within a TimeSlot
 */
const Show = ({ title }: ShowProps) => (
  <div>
    {title}
  </div>
);

export default Show;
