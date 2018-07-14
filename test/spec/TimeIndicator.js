/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { TimeIndicator } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('TimeIndicator', () => {
  let component;

  const setupComponent = (props = {}) => {
    component = mount((
      <TimeIndicator {...props} />
    ));
  };

  const th = () => component.find('th');

  const structureTests = () => {
    it('renders a th', () => {
      expect(component.children()).toHaveLength(1);
      expect(th()).toHaveLength(1);
    });
  };

  const renderTimeTests = () => {
    it('renders the time text in the th', () => {
      expect(th()).toHaveText('16:00');
    });
  };

  const renderNoTimeTests = () => {
    it('renders no text in the th', () => {
      expect(th()).toHaveText('');
    });
  };

  const dateNumberTests = (name, date, props, tests) => {
    describe(name, () => {
      describe('as a date', () => {
        beforeEach(() => setupComponent({
          time: date,
          ...props
        }));

        tests();
      });

      describe('as a number', () => {
        beforeEach(() => setupComponent({
          time: date.getTime(),
          ...props
        }));

        tests();
      });
    });
  };

  dateNumberTests('with time on the hour', new Date('1/1/99 16:00'), {}, () => {
    it('renders the time text in the th', () => {
      expect(th()).toHaveText('16:00');
    });
  });

  dateNumberTests('with time on the half hour', new Date('1/1/99 16:30'), {}, () => {
    it('renders no text in the th', () => {
      expect(th()).toHaveText('');
    });
  });

  dateNumberTests(
    'with time on the half hour and minutes set',
    new Date('1/1/99 16:30'),
    { minutes: [0, 30] },
    () => {
      it('renders the time in the th', () => {
        expect(th()).toHaveText('16:30');
      });
    }
  );
});
