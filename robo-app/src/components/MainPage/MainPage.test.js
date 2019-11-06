import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './index';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false 
    }

    wrapper = shallow(<MainPage { ...mockProps } />);
});

it('Expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('Filter robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 3,
                name: 'Johnny',
                email: 'jonhhy@gmail.com'
            }
        ],
        searchField: 'aaa',
        isPending: false 
    }

    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)

    expect(wrapper2.instance().filterRobots([])).toEqual([]);
});
