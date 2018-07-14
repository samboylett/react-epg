/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { Channel, TimeSlot } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Channel', () => {
  let component;

  const setupComponent = (props = {}) => {
    component = mount((
      <Channel name="Foo Bar" {...props}>
        {props.children || (<TimeSlot start={0} end={10}>Bah</TimeSlot>)}
      </Channel>
    ));
  };

  const tr = () => component.find('tr');
  const th = () => tr().find('th');

  describe('when time slots not joined up', () => {
    beforeEach(() => setupComponent({
      children: [
        <TimeSlot
          start={new Date('1/1/97 14:00')}
          end={new Date('1/1/97 14:59')}
        >Foo</TimeSlot>,
        <TimeSlot
          start={new Date('1/1/97 16:00')}
          end={new Date('1/1/97 17:00')}
        >Bar</TimeSlot>
      ]
    }));

    it('renders a time slot between them', () => {
      const timeSlots = component.find(TimeSlot);
      expect(timeSlots).toHaveLength(3);
      expect(timeSlots.at(1)).toHaveProp('start', new Date('1/1/97 15:00'));
      expect(timeSlots.at(1)).toHaveProp('end', new Date('1/1/97 15:59'));
    });
  });

  describe('basic structure', () => {
    beforeEach(setupComponent);

    it('renders a tr', () => {
      expect(component.children()).toHaveLength(1);
      expect(tr()).toHaveLength(1);
      expect(tr().children()).toHaveLength(2);
    });

    it('renders a th with channel name', () => {
      expect(th()).toHaveLength(1);
      expect(th()).toHaveText('Foo Bar');
    });

    it('renders children after the th', () => {
      expect(tr().children().at(1)).toHaveText('Bah');
      expect(tr().find(TimeSlot)).toHaveText('Bah');
    });
  });
});
