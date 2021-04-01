import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../../CounterApp'


describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp value={7}/> )
    // El beforeEach me permite reiniciar el valor de value por cada test.
    // Si bien lo defino 2 veces, la primera vez es para poder utilizar los métodos de la api shallow
    beforeEach( () => {
        wrapper = shallow(<CounterApp value={7}/> )
    })

    test('debe de mostrar <CounterApp /> correctamente', () => {
        
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de mostrar el valor por defecto 100 ', () => {
        
        const wrapper = shallow(
            <CounterApp value={100} 
            /> )
            const counterText = wrapper.find('h2').text().trim()
            expect( counterText ).toBe('100')
            // console.log(counterText);
    })

    test('debe de incremetar al tocar el botón +1', () => {
        
        // Guardo el wrapper en btn1 para tenerlo como referencia, ¿Qué elemento estoy atrapando?
        // const btn1 = wrapper.find('button').at(0)
        // console.log(btn1.html())
        wrapper.find('button').at(0).simulate('click')
        
        // Comprobar si el valor cambio, esta inicializado en 7, al hacer click esperaría que el valor sea modificado a 8
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('8')
        
        //IMPORTANTE: El contador queda con el valor 8, debo inicializarlo en el valor inicial nuevamente para siguientes tests. 
        
        
    })

    test('debe de decrementar al tocar el botón -1 ', () => {
        
        // const btn3 = wrapper.find('button').at(2)
        // console.log(btn3.html())

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('6')
    })

    test('Debe de resetear el contador al tocar el botón reset ', () => {

        const wrapper = shallow(<CounterApp value={10}/> )
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('10');
        console.log(counterText);
    })
    
    
    
    
    
})

/*
    Importante el beforeEach( () => {

        wrapper = shallow( <CounterApp value={7} />)
    })

    para reiniciar el valor por defecto de mi contador en cada test, caso contrario, el valor queda con el valor definido por el último test..
    la doble definición de wrapper es para poder acceder a todos los métodos de la api Shallow()
*/