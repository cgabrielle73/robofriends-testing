
import { shallow } from "enzyme";
import React from 'react';
import CounterButton from "./CounterButton";

it('simulates click events', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 2});

    expect(wrapper.props().color).toEqual('red')
})