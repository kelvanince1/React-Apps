import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './index';

it('Expect to render Counter Button component', () => {
    expect(shallow(<CounterButton color="red" />)).toMatchSnapshot();
});

it('Correctly increments the counter', () => {
    const wrapper = shallow(<CounterButton color="red" />);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
});
