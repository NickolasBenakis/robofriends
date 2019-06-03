import { shallow } from 'enzyme';
import MainPage from './MainPage';
import React from 'react';


let wrapper;


beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage  {...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
});

it('filters the robots correctly', () => {
    expect(wrapper.instance().filteredRobots()).toEqual([]);

});

it('filters the robots correctly 2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }

    const filteredRobots = [];
    const wrapper2 = shallow(<MainPage  {...mockProps2} />)
    expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots);
});

it('should render loading if pending is true', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: true
    }
    const wrapper3 = shallow(<MainPage  {...mockProps3} />)

    expect(wrapper3.html()).toEqual('<h1 style="text-align:center">Loading</h1>')
});