import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');



const category = 'hola mundo'

describe('Working with <GifGrid />', () => {

    test('should should work correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true  
        });


        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

    })
    

    test('should show items when it is loading images from useFetchGifs ', () => {
        

       const gifs = [{
           id: 'ABC',
           url: 'htpps://algo.jpg',
           title: 'cualquier cosa'
       }] 
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false  
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    }); 
    
    
})
