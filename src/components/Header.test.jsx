import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';


it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});



