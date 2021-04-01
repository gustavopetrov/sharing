import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp'
// import PrimeraApp from './PrimeraApp'
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = {7} /> , divRoot);

// ReactDOM.render( <PrimeraApp saludo='Hola, soy Goku'/> , divRoot);


// rafcp -> Crea un FC (funcional component) con el nombre del archivo y también crea las propTypes, ADEMÁS importa React from 'react' y PropTypes from 'prop-types'
