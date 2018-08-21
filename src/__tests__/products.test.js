import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Homepage from '../components/pages/Homepage';

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

it('renders at least one li item', () => {
  const result = shallow(<Homepage />).find('Banner');
  expect(result).toBeTruthy();
});
