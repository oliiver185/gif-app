import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import React from 'react';
import AddCategory from '../../components/AddCategory';


describe('Tests in <AddCategory />', () => {


    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach ( () => {
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    
        test('should show correctly', () => {

            expect(wrapper).toMatchSnapshot();
        });
        
        
        test('should change the text box', () => {

            const input = wrapper.find('input');
            const value = 'hola mundo';

            input.simulate('change', {target: {
                value:value
            }});

            expect(wrapper.find('p').text().trim()).toBe(value);
            
        });

        test('should not post the information with submit', () => {
            
            wrapper.find('form').simulate('submit',  { preventDefault(){} });

            expect(setCategories).not.toHaveBeenCalled();
        });

        test('should call setCategories and clean the text box', () => {
            
            const value = 'hola';

            const input = wrapper.find('input');
            input.simulate('change',  {target: {value:value}} );

            wrapper.find('form').simulate('submit', { preventDefault(){}});

            expect(setCategories).toHaveBeenCalled();
          	
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
            expect(input.prop('value')).toBe('');


            
        })
        
        
        
})






