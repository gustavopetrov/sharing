// C = Clubs ( tréboles ) 
// D = Diamonds ( diamantes )
// H = Hearts ( corazones )
// S = Spades ( espadas )

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

const crearDeck = () => {
    // Creo la baraja
    for(let i = 2 ; i <= 10 ; i++){
        for (const tipo of tipos) {
            deck.push(i + tipo)   
        }
    }
    // Creo la baraja
    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(especial + tipo)
        }
    }
    // mezclo la baraja
    deck = _.shuffle( deck );
    console.log(deck);
    return deck
}

crearDeck()

// Esta función me permite pedir una carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    // Elimino la ultima carta
    const carta = deck.pop()

    return carta
}

// pedirCarta()

// Averiguar el valor de la carta
const valorCarta = (carta)=> {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? 
        (valor === 'A') ? 11 : 10
        : parseInt(valor)    
}
// const valor = valorCarta(pedirCarta())

// Turno de la computadora

const turnoComputadora = ( puntosMinimos) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }
        
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout( () => {
        if (puntosComputadora === puntosMinimos) {
            // condición cuando hay un empate
            alert('Nadie gana.')
        } else if ( puntosMinimos > 21) {
            // condición cuando gana la computadora
            alert('Computadora gana')
        } else if (puntosComputadora > 21 ){
            // Condición cuando la computadora supera los 21 pts
            alert('Jugador gana!')
        }else {
            alert('Computadora gana!')
        }
    },500)
    
}





const btnNuevoJuego = document.querySelector('#btn__nuevojuego');
const btnPedirCarta = document.querySelector('#btn__pedir');
const btnDetener = document.querySelector('#btn__detener');

const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas')



btnPedirCarta.addEventListener('click', ()=> {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);  
    // Pos 0 -> jugador , Pos 1 -> computadora
    puntosHTML[0].innerText = puntosJugador;
    // Creo la imagen de forma dinámica
    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Superaste los 21, perdiste')
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if ( puntosJugador === 21) {
        console.warn('21, genial!')
        btnPedirCarta.disabled = true
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
    
});

btnDetener.addEventListener('click',()=> {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

btnNuevoJuego.addEventListener('click', ()=> {
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerText = '';
    divCartasJugador.innerText = '';

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;

})

//TODO: borrar
// si el jugador se pasa los 21, la computadora tiene que superar el valor 0
// si el jugador no se pasa, la computadora tiene que igualar o superar al jugador
