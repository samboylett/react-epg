/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { Show } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Show', () => {
  let component;

  const setupComponent = () => {
    component = mount((<Show title="Foo Bar" />))
  };

  beforeEach(setupComponent);

  it('renders a div with text matching title', () => {
    expect(component.children()).toHaveLength(1);
    expect(component.find('div')).toHaveText('Foo Bar');
  });
});
