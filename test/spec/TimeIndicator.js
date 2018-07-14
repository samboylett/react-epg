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
  const div = () => th().find('div');

  const structureTests = (withDiv) => {
    it('renders a th', () => {
      expect(component.children()).toHaveLength(1);
      expect(th()).toHaveLength(1);
    });

    it('sets th width to 1px', () => {
      expect(th()).toHaveProp('style', expect.objectContaining({ width: '1px' }));
    });

    if (withDiv) {
      it('renders a div in the th', () => {
        expect(div()).toHaveLength(1);
      });

      it('sets div width to 1px', () => {
        expect(div()).toHaveProp('style', expect.objectContaining({ width: '1px' }));
      });

      it('sets div whiteSpace to nowrap', () => {
        expect(div()).toHaveProp('style', expect.objectContaining({ whiteSpace: 'nowrap' }));
      });
    } else {
      it('does not render a div', () => {
        expect(div()).toHaveLength(0);
      });
    }
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

    structureTests(true);
  });

  dateNumberTests('with time with single digits hour', new Date('1/1/99 4:00'), {}, () => {
    it('renders the hours with leading zeros', () => {
      expect(th()).toHaveText('04:00');
    });

    structureTests(true);
  });

  dateNumberTests('with time on the half hour', new Date('1/1/99 16:30'), {}, () => {
    it('renders no text in the th', () => {
      expect(th()).toHaveText('');
    });

    structureTests(false);
  });

  dateNumberTests(
    'with time on the half hour and minutes set',
    new Date('1/1/99 16:30'),
    { minutes: [0, 30] },
    () => {
      it('renders the time in the th', () => {
        expect(th()).toHaveText('16:30');
      });

      structureTests(true);
    }
  );

  dateNumberTests(
    'with time on the hour and format set',
    new Date('1/1/99 16:00'),
    { format: (d) => d.toISOString() },
    () => {
      it('renders the time in the th using the format function', () => {
        expect(th()).toHaveText('1999-01-01T16:00:00.000Z');
      });

      structureTests(true);
    }
  );
});
