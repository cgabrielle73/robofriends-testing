import { shallow } from "enzyme";
import React from 'react';
import CardList from "./CardList";

test(' card component', () => {
    const mock = [
        {
            id: 1,
            name: 'robo',
            email: 'robo@gmsd.com'
        },
        {
            id: 2,
            name: 'robow',
            email: 'roboww@gmsd.com'
        },
    ]
    expect(shallow(<CardList robots={mock}/>)).toMatchSnapshot();
})