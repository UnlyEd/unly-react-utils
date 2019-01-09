import React from 'react';
import { shallow } from 'enzyme';
import SafeHTML from './SafeHTML';

describe('<SafeHTML />', () => {

  it('render a `div`, if no tag is provided', () => {
    const wrapper = shallow(<SafeHTML/>);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('must render html tag props', () => {
    const wrapper = shallow(<SafeHTML html={<span>Hello</span>}/>);
    expect(wrapper.contains(<span>Hello</span>));
  });
});
