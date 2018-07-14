/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { TimeSlot } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('TimeSlot', () => {
  let component;

  const setupComponent = (props = {}) => {
    component = mount((
      <TimeSlot {...props}>
        <p>Shows</p>
      </TimeSlot>
    ));
  };

  const tests = () => {
    it('renders a td with correct colspan', () => {
      expect(component.children()).toHaveLength(1);
      expect(component.find('td')).toHaveProp('colSpan', 90);
    });

    it('renders the children passed to it', () => {
      expect(component.find('td').children()).toHaveLength(1);
      expect(component.find('td').find('p')).toHaveText('Shows');
    });
  };

  describe('with dates', () => {
    beforeEach(() => setupComponent({
      start: new Date('1/1/99 16:00'),
      end: new Date('1/1/99 17:30')
    }));

    tests();
  });

  describe('with numbers', () => {
    beforeEach(() => setupComponent({
      start: 915206400000,
      end: 915211800000
    }));

    tests();
  });
});
