import './styles.css';
import { Todo, TodoList } from './js/class/index';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

// todoList.todos[1].imprimirClase();