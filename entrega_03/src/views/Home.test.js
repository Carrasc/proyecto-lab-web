import React from 'react';
import { shallow, configure } from 'enzyme';

import Home from './Home';
import TestRunner from 'jest-runner';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});


describe('Home', () => {
    test('Rendering the simple component', () => {
        const wrapper = shallow(
            <Home />
        );

        expect(wrapper).toMatchSnapshot();
    });
});