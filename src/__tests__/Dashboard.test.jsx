import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/Dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard component', () => {
  it('should render dashboard', () => {
    const wrapper = shallow(
      <Dashboard />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
