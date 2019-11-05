import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecentView from '../components/RecentView';

configure({ adapter: new Adapter() });

describe('RecentView component', () => {
  it('should render recent view component', () => {
    const wrapper = shallow(
      <RecentView />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
