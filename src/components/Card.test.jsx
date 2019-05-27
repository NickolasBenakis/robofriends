import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';
import { exportAllDeclaration } from '@babel/types';


it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1)
});



