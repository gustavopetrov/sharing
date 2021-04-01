import React from 'react';
// const { render } = require("@testing-library/react")
const { default: PrimeraApp } = require("../../PrimeraApp")
import { shallow } from 'enzyme'

describe( 'Pruebas en <PrimeraApp />', ()=> {

    // test('debe de mostrar el mensaje "Hola, soy Goku" ', () => {
    //     const saludo = 'Hola, soy Goku'
    //     const { getByText } = render( <PrimeraApp saludo ={ saludo } />)

    //     expect( getByText ( saludo ) ).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp />', () => {
        
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo = { saludo }/>)

        expect( wrapper ).toMatchSnapshot();


    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku'
        const subTitulo = 'Soy el subtitulo de las pruebas con Enzyme'
        const wrapper = shallow(
        <PrimeraApp 
        saludo = { saludo } 
        subtitulo = {subTitulo}
        />)

        const textoParrafo = wrapper.find('#paraph').text();
        console.log(textoParrafo);

        expect( textoParrafo).toBe(subTitulo)

    })
    
    
    
})