import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../containers/Sidebar';

configure({ adapter: new Adapter() });

describe('Sidebar component', () => {
  it('should render sidebar', () => {
    const wrapper = shallow(
      <Sidebar />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
