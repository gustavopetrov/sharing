import {Todo} from '../js/class/index';
import {todoList} from '../index';

// Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters') ;
const anchorFiltros = document.querySelectorAll('.filtro');







export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado ? 'checked' : '')}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    // Inserto en el HTML el first element child (el primer hijo del DIV que cree, así no tengo un DIV suelto en el html donde debería haber una lista.)
    divTodoList.append(div.firstElementChild)


    return div
}

txtInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo( txtInput.value)
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
})

divTodoList.addEventListener('click', (e)=> {
    const nombreElemento = e.target.localName; // identificar donde clickeo
    const todoElemento  = e.target.parentElement.parentElement
    const todoId        = todoElemento.getAttribute('data-id')

    if(nombreElemento.includes('input') ){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId); // hay que borrar el todo

        divTodoList.removeChild(todoElemento);
    }
})

btnBorrar.addEventListener('click', (e)=> {

    // todoList.eliminarCompletados();

    for( let i = divTodoList.children.length-1; i >=0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }

})

ulFiltros.addEventListener('click',(e)=>{

    const filtro = e.target.text;

    if(!filtro) return

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    e.target.classList.add('selected');

    for( const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');


        switch( filtro ){
            case 'Pendientes':
                if(completado) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }

    
})