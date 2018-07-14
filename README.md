# React EPG

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![npm version](https://badge.fury.io/js/react-epg.svg)](https://badge.fury.io/js/react-epg)
[![Build Status](https://travis-ci.org/samboylett/react-epg.svg?branch=master)](https://travis-ci.org/samboylett/react-epg)
[![codecov](https://codecov.io/gh/samboylett/react-epg/branch/master/graph/badge.svg)](https://codecov.io/gh/samboylett/react-epg)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/samboylett/react-epg/master)](https://stryker-mutator.github.io)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/45b4f27245ba461a812c34194d365d94)](https://www.codacy.com/app/samboylett/react-epg?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=samboylett/react-epg&amp;utm_campaign=Badge_Grade)

## Installation

```sh
npm i --save react-epg
```

## Usage

[Documentation](https://react-epg-docs.netlify.com/)

[Examples](https://react-epg-storybook.netlify.com/)

```jsx
import EPG, { Channel, TimeLine, TimeSlot, Show } from 'react-epg';

const MyEPG = () => (
  <EPG>
    <TimeLine channel={<Channel name="Sky" />}>
      <TimeSlot start={new Date('1/1/97 16:00')} end={new Date('1/1/97 16:30')}>
        <Show title="The Simpsons" />
      </TimeSlot>
      <TimeSlot start={new Date('1/1/97 16:30')} end={new Date('1/1/97 17:30')}>
        <Show title="Inception" />
      </TimeSlot>
    </TimeLine>
    <TimeLine channel={<Channel name="Dave" />}>
      <TimeSlot start={new Date('1/1/97 16:00')} end={new Date('1/1/97 17:00')}>
        <Show title="Top Gear" />
      </TimeSlot>
      <TimeSlot start={new Date('1/1/97 17:00')} end={new Date('1/1/97 18:45')}>
        <Show title="Shrek 3" />
      </TimeSlot>
    </TimeLine>
  </EPG>
);
```
