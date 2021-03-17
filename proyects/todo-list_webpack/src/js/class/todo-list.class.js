import {Todo} from './todo.class'

export class TodoList {
    
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }
    // Recibe una tarea (un To-do) y lo agrega al array de Tareas (to-dos)
    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    marcarCompletado( id ){

        for(const todo of this.todos){
            
            if (todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarTodo(id) {
      this.todos = this.todos.filter( todo => todo.id != id)
      this.guardarLocalStorage();
    }


    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        // Si es la primera vez que entro, tengo que settear la lista de to-do como un arreglo vacío, caso contrario convertir el objeto a un string para poder trabajarlo con localStorage()

        this.todos = (localStorage.getItem('todo')) 
        ? this.todos = JSON.parse(localStorage.getItem('todo'))
        : [];


        this.todos = this.todos.map( obj => Todo.fromJson(obj));

        // this.todos = this.todos.map(Todo.fromJson);
        // si el argumento, es lo mismo que envio por el callback,
        // puedo simplificar la línea de código dejandolo así..

    }
}