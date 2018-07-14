/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { Channel } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Channel', () => {
  let component;

  const setupComponent = () => {
    component = mount((
      <Channel name="Foo Bar">
        <p>TimeSlots</p>
      </Channel>
    ));
  };

  const tr = () => component.find('tr');
  const th = () => tr().find('th');

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
    expect(tr().children().at(1)).toHaveText('TimeSlots');
    expect(tr().find('p')).toHaveText('TimeSlots');
  });
});
