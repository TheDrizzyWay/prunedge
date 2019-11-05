import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../components/Menu';

configure({ adapter: new Adapter() });

describe('Menu component', () => {
  it('should render menu component', () => {
    const wrapper = shallow(
      <Menu />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
