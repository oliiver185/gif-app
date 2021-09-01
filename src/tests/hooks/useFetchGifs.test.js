import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'


describe('Pruebas en useFetchGifs', () => {
    

    test('should return initial state', async () => {
        
      const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));

      
      const {data, loading} = result.current;
        // const {data, loading } = useFetchGifs('One Punch');
        await waitForNextUpdate();

        // console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('should return initial state', async () => {
        
      const {result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
      const {data, loading} = result.current;
        // const {data, loading } = useFetchGifs('One Punch');


        console.log(data, loading);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
})
