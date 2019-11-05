import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from '../components/DocumentsView';

configure({ adapter: new Adapter() });

describe('User component', () => {
  it('should render user component', () => {
    const wrapper = shallow(
      <User />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
