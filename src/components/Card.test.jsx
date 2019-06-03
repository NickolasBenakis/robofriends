import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';
import renderer from 'react-test-renderer';


it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});



