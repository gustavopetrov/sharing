import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';
describe('Pruebas en 02-template-strings.js', () => {

    test('Prueba en el método getSaludo', () => {
        
        const nombre = 'Gustavo';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre)
        // console.log(getSaludo(nombre));


    })
    // getSaludo debe retornar Hola Carlos! Si no hay argumento nombre
    test('getSaludo debe retornar Hola Carlos! Si no hay argumento nombre', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos!');
        
    })
    
    
})