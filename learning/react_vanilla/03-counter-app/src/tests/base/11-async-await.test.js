import { getImagen } from "../../base/11-async-await"


describe('Pruebas con async-await y fetch', () => {

    test('debe de retornar el URL de la img', async() => {
        
        const url = await getImagen()
        // expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)
    })
    

})