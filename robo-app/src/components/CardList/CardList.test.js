import React from 'react';
import { shallow } from 'enzyme';

import CardList from './index';

it('Expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Doe',
            username: 'Johnny',
            email: 'goJohnnygo'
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
