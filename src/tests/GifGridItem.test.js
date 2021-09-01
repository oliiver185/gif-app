import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../components/GifGridItem';



describe('should show the component correctly', () => {
    
    const title = 'hola';
    const url = 'htpps://localhost/algo.jpg'
    const wrapper = shallow(< GifGridItem title={ title } url={url} />); 
    
    test('should show the component correctly', () => {
        
            
        

            expect(wrapper).toMatchSnapshot();

    });

    test('should have a paragraph with a title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have the same image as the url and alt in props ', () => {
       
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);


    });

    test('should have animated class', () => {
        
        const div = wrapper.find('div').at(0);

        const className = div.prop('className');


        // console.log(div.props());
        expect(className.includes('animate__fadeIn')).toBe(true)

    });
    
    
    


    
    
})
