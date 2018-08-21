import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Products from '../components/pages/Products';

it('renders at least one li item', () => {
  const result = shallow(<Products />).contains(<ul className='reduxList' />);
  expect(result).toBeTruthy();
});
