import {getUser} from '../../base/05-funciones'
import {getUsuarioActivo} from '../../base/05-funciones'

// {} === {} -> No son iguales, son dos objetos que apuntan a direcciones de memoria distintas
describe('Pruebas 05-Funciones', ()=> {

    test('Debe de retornar un OBJ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser()

        // console.log(user);

        expect(user).toEqual(userTest)
    })

    test('getUsuarioActivo debe retornar un objeto ', () => {
        
        const nombre = 'Gurlo';
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const userActive = getUsuarioActivo(nombre)

        expect(userTest).toEqual(userActive);


    })
    
    

})