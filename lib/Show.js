// @flow
import * as React from 'react';

export type ShowProps = {
  title: string
};

const Show = ({ title }: ShowProps) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default Show;
