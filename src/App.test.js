import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {

  const component = shallow(
    <App />
  );

  expect(component.text()).toContain('Welcome to React');
});
