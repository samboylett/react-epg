import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EPG, { Show, TimeSlot, Channel } from '../lib/index';

storiesOf('EPG', module)
  .addDecorator(story => (
    <div style={{ height: '100vh', width: '100vw' }}>
      {story()}
    </div>
  ))
  .add('basic EPG', () => (
    <EPG>
      <Channel name="Sky">
        <TimeSlot start={new Date('1/1/97 15:00')} end={new Date('1/1/97 15:30')}>
          <Show title="The Simpsons" />
        </TimeSlot>
        <TimeSlot start={new Date('1/1/97 15:30')} end={new Date('1/1/97 16:30')}>
          <Show title="A Movie" />
        </TimeSlot>
      </Channel>
    </EPG>
  ));
