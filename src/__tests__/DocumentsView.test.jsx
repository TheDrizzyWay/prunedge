import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DocumentsView from '../components/DocumentsView';

configure({ adapter: new Adapter() });

describe('DocumentsView component', () => {
  it('should render documents view component', () => {
    const wrapper = shallow(
      <DocumentsView />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
