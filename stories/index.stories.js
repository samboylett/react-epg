import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EPG, { Show, TimeLine, TimeSlot, Channel } from '../lib/index';

storiesOf('EPG', module)
  .addDecorator(story => (
    <div style={{ height: '100vh', width: '100vw' }}>
      {story()}
    </div>
  ))
  .add('basic', () => (
    <EPG>
      <TimeLine channel={<Channel name="Sky" />}>
        <TimeSlot start={new Date('1/1/97 16:00')} end={new Date('1/1/97 16:30')}>
          <Show title="The Simpsons" />
        </TimeSlot>
        <TimeSlot start={new Date('1/1/97 16:30')} end={new Date('1/1/97 17:30')}>
          <Show title="A Movie" />
        </TimeSlot>
      </TimeLine>
    </EPG>
  ))
  .add('two channels', () => (
    <EPG>
      <TimeLine channel={<Channel name="Sky" />}>
        <TimeSlot start={new Date('1/1/97 16:00')} end={new Date('1/1/97 16:30')}>
          <Show title="The Simpsons" />
        </TimeSlot>
        <TimeSlot start={new Date('1/1/97 17:00')} end={new Date('1/1/97 17:30')}>
          <Show title="A Movie" />
        </TimeSlot>
      </TimeLine>
      <TimeLine channel={<Channel name="Dave" />}>
        <TimeSlot start={new Date('1/1/97 17:00')} end={new Date('1/1/97 17:30')}>
          <Show title="Top Gear" />
        </TimeSlot>
      </TimeLine>
    </EPG>
  ))
  .add('two channels with numbers', () => (
    <EPG headerSpan={2}>
      <TimeLine channel={[<th key="number">124</th>, <th key="name">Sky</th>]}>
        <TimeSlot start={new Date('1/1/97 16:00')} end={new Date('1/1/97 16:30')}>
          <Show title="The Simpsons" />
        </TimeSlot>
        <TimeSlot start={new Date('1/1/97 17:00')} end={new Date('1/1/97 17:30')}>
          <Show title="A Movie" />
        </TimeSlot>
      </TimeLine>
      <TimeLine channel={[<th key="number">150</th>, <th key="name">Dave</th>]}>
        <TimeSlot start={new Date('1/1/97 17:00')} end={new Date('1/1/97 17:30')}>
          <Show title="Top Gear" />
        </TimeSlot>
      </TimeLine>
    </EPG>
  ));
