import React from 'react';
import { shallow } from 'enzyme';

import Card from './index';

it('Expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
