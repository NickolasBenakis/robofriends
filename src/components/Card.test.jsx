import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';


it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});



