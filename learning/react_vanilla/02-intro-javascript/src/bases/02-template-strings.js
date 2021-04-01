const nombre   = 'Gustavo'
const apellido = 'Petrov'



// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${1+1}
`;

function getSaludo(nombre, apellido) {
    return 'Hola '+ nombre +' '+ apellido;
}

console.log(`Este es un texto: ${getSaludo(nombre,apellido)}`);