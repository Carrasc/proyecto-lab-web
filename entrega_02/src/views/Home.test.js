import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import TestRunner from 'jest-runner';

describe('Home', () => {
    test('Rendering the simple component', () => {
        const wrapper = shallow(
            <Home />
        );

        expect(wrapper).toMatchSnapshot();
    });
});