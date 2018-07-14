// @flow
import * as React from 'react';

export type ShowProps = {
  title: string
};

const Show = ({ title }: ShowProps) => (
  <div>
    {title}
  </div>
);

export default Show;
