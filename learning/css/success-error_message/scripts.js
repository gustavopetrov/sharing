const button = document.getElementById('button');
const alertElement = document.getElementById('alert');

button.addEventListener('click', () => {
    
    const mensaje = "¿Sos mayor de edad?";
    const resultado = confirm(mensaje);

    if(mensaje){
        alertElement.textContent = 'Success!';
        alertElement.classList.add('alert--ok');
    }
    else{
        alertElement.textContent = 'Err!';
        alertElement.classList.add('alert--error');
    }
    console.log(resultado);    
})

alertElement.addEventListener('animationend', () => {
    alertElement.textContent = '';
    alertElement.classList.remove('alert--ok')
})