import { shallow } from 'enzyme';
import App from './App';
import React from 'react';


it('expect to render App component', () => {

    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});



