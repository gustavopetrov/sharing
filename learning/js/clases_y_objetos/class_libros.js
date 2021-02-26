/*
    Crea una clase libro.
    La clase libro tendrá título, autor, año y género.
    Crea un método que devuelva toda la información del libro.
    Pide 3 libros y guárdalos en un array.
    Los libros se introduciran al arrancar el programa pidiendo los datos 
    con prompt.
    Validar que los campos no se introduzcan vacíos.
    Validar que el año sea un número y que tenga 4 dígitos.
    Validar que el género sea: aventuras, terror ó fantasía.
    Crea una función que muestre todos los libros.
    Crea una función que muestre todos los autores ordenados alfabéticamente.
    Crea una función que pida un género y muestre la información de los 
    libros que pertenezcan a ese género usando el método que devuelve la 
    información.
*/

class book{
    constructor (title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
}