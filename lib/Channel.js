// @flow
import * as React from 'react';

export type ChannelProps = {
  name: string
};

/**
 * Component to render a channel in a TimeLine
 *
 * @param {ChannelProps} props
 * @param {string} props.name - Name of the channel
 */
const Channel = ({ name }: ChannelProps) => (
  <th>
    {name}
  </th>
);

export default Channel;
