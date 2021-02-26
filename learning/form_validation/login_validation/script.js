// Form
const form = document.querySelector('.form');
// Error
const errorBlock = document.querySelector('.error-block');
const errorText = document.querySelector('.error');
//Inputs
const username = document.querySelector('.username-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.pw-input');
const repeatPassword = document.querySelector('.rpw-input');


const fields = [username, email, password, repeatPassword];
const usersFromDB = ['test', 'text123', 'halelujan'];

//Helper functions
const throwError = message => {
    errorBlock.style.display = 'block';
    errorText.innerHTML = message;
};
const emptyFields = fields => {
    let isEmpty;
    fields.forEach(field => 
        field.value.length === 0 ? (isEmpty = true) : (isEmpty = false)
    );
    return isEmpty;
};
const uniqueUser = (usersFromDB, username) => {
    if (!usersFromDB.indexOf(username.value)) return false;
    else return true;
};
const validEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.value) ? true : false;
};
const validPassword = password => {
    if (password.value.length < 6) return false;
    else return true;
};
const validRepeat = (password, repeatPassword) => {
    if (password.value === repeatPassword.value) return true;
    else return false;
};


form.addEventListener('submit', e => {
    e.preventDefault();

    //Check for empty fields
    if (emptyFields(fields)) throwError('Todos los campos deben ser completados.');

    //Check for unique username
    else if (!uniqueUser(usersFromDB, username)) throwError('Nombre de usuario invalido.');

    //Check for valid email
    else if (!validEmail(email)) throwError('Ingrese un email valído.');

    //Check for valid password
    else if (!validPassword(password)) throwError('Su contraseña debe tener al menos 6 caracteres.');

    //Check for same repeat password
    else if (!validRepeat(password, repeatPassword)) throwError('Tus contraseñas no coiciden.');
    
    //Submit
    else {
        errorBlock.classList.add('success');
        throwError('Enviado.')
    }
})