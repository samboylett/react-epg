/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import EPG from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('EPG', () => {
  let component;

  const setupComponent = (props = {}) => {
    component = mount((
      <EPG {...props}>
        {props.children}
      </EPG>
    ));
  };

  const table = () => component.find('table');
  const thead = () => table().find('thead');
  const tbody = () => table().find('tbody');
  const headTr = () => thead().find('tr');
  const th = () => headTr().find('th');

  beforeEach(setupComponent);

  it('renders a table', () => {
    expect(component.children()).toHaveLength(1);
    expect(table()).toHaveLength(1);
  });

  it('renders a thead', () => {
    expect(thead()).toHaveLength(1);
  });

  it('renders a tbody', () => {
    expect(tbody()).toHaveLength(1);
  });

  it('renders a row in the thead', () => {
    expect(headTr()).toHaveLength(1);
  });

  it('renders a th in the row in the thead', () => {
    expect(th()).toHaveLength(1);
  });
});
