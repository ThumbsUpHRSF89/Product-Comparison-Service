import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import NameRow from '../client/src/nameRow';
import Adapter from 'enzyme-adapter-react-16';
import ComparisonTable from '../client/src/comparisonTable';
Enzyme.configure({adapter: new Adapter() })

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});


// describe('NameRow should render correctly', () => {
//   it('renders name correctly', () => {
//     const names = ['Mavic Pro'];
//     const wrapper = mount(
//       <NameRow name={names} />
//     );
//     const p = wrapper.find('.product-name');
//     expect(p.text()).toBe('Mavic Pro');
//   })
// })

// describe('App should render correctly', () => {
//   it ('renders correctly', () => {
//     const
//   })
// })

test('ComparisonTable should render a table', () => {
  const wrapper = shallow(<ComparisonTable data={[]}/>);
  expect(wrapper.is('table')).toEqual(true);
});
