/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import EPG from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

let component;

describe('EPG', () => {
});
