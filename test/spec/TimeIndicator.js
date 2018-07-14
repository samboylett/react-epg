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

  describe('with an on the hour date', () => {
    beforeEach(() => setupComponent({
      time: new Date('1/1/99 16:00')
    }));

    renderTimeTests();
  });

  describe('with an the hour number', () => {
    beforeEach(() => setupComponent({
      time: 915206400000
    }));

    renderTimeTests();
  });

  describe('with a none display date', () => {
    beforeEach(() => setupComponent({
      time: new Date('1/1/99 16:15')
    }));

    renderNoTimeTests();
  });

  describe('with a none display number', () => {
    beforeEach(() => setupComponent({
      time: 915206500000
    }));

    renderNoTimeTests();
  });
});
