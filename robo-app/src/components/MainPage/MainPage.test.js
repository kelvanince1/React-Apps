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
        robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
        searchField: 'john',
        isPending: false 
    }

    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)

    // expect(wrapper2.instance().filterRobots([])).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

// it('Filter robots correctly 3', () => {
//     const mockProps3 = {
//         onRequestRobots: jest.fn(),
//         robots: [{
//                 id: 3,
//                 name: 'John',
//                 email: 'john@gmail.com'
//             }],
//         searchField: 'john',
//         isPending: false 
//     }

//     const filteredRobots = [];
//     const wrapper3 = shallow(<MainPage { ...mockProps3 } />)

//     expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
// });
