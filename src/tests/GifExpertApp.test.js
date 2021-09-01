import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';



describe(' Working with <GifExpertApp/> ', () => {

    test('should work correctly', () => {
        

        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
    
})