import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect((wrapper.state())).toEqual({ count: 1 })
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('keypress');
    expect((wrapper.state())).toEqual({ count: 3 })
    expect((wrapper.props().color)).toEqual("red");

});

it('checks if shouldCOmponment update works', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />)

    const noUpdate = wrapper.instance().shouldComponentUpdate({}, { count: 0 })
    expect(noUpdate).toEqual(false)

    const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, { count: 1 })
    expect(shouldUpdate).toEqual(true)
})