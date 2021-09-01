import { getGif } from "../../helpers/getGifs"

describe('Tests with getGifs Fecth', () => {

    test('should bring ten elements', async () => {
        
        const gifs = await  getGif('One Punch')
        

      expect(gifs.length).toBe(10);
    });
   
    test('should bring ten elements', async () => {
        
        const gifs = await  getGif('')
        

        expect(gifs.length).toBe(0);
    });
    
})
