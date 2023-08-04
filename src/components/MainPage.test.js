
import { shallow } from "enzyme";
import React from 'react';
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Clara',
            email: 'mock@gmail.com'
        }],
        searchField: 'clara',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 1,
        name: 'Clara',
        email: 'mock@gmail.com'
    }]);
});

it('filters robots2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Clara',
            email: 'mock@gmail.com'
        }],
        searchField: 'b',
        isPending: false
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('isPending robots2', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Clara',
            email: 'mock@gmail.com'
        }],
        searchField: '',
        isPending: true
    }
    const wrapper4 = shallow(<MainPage {...mockProps4}/>)
    expect(wrapper4.instance().props.isPending).toEqual(true);
});
