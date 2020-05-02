import React, { Component } from 'react'
import {shallow} from 'enzyme'
import Albums from '../components/Albums';

import {findByTestAtrr} from '../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Albums {...props }/>);
    return component;
}

describe("Have props", () => {
    let wrapper
    beforeEach(() => {
        // const props = {
        //     // data_albums,
        //     // data_users
        // }
        wrapper=setUp();
    });

    it("Should render the props",() =>{
        const component = findByTestAtrr(wrapper,"loaded");
        expect(component.length).toBe(0); 
    })

})