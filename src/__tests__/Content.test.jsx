import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from '../containers/Content';

configure({ adapter: new Adapter() });

describe('Content component', () => {
  it('should render Content', () => {
    const wrapper = shallow(
      <Content />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
