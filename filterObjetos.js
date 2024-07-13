//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array de objetos - filter
*/

const Libros = [
    {
        "codigo":"001",
        "nombre":"El alquinista",
        "precio":20,
        "autor":"Paulo Coelho",
    },
    {
        "codigo":"002",
        "nombre":"a la costa",
        "precio":15,
        "autor":"Luis Martine",
    },
    {
        "codigo":"003",
        "nombre":"El señor de los anillos",
        "precio":22,
        "autor":"J.R.R. Tolkien",
    },
    {
        "codigo":"004",
        "nombre":"Las cruces sobr eel agua",
        "precio":12,
        "autor":"J.R.R. Tolkien",
    },
    {
        "codigo":"005",
        "nombre":"El señor de los anillos",
        "precio":30,
        "autor":"J.R.R. Tolkien",
    },
]

//encuentre los libros cuyo precio sea mayor a 20 dólares
const librosCaros = Libros.filter((libro) => libro.precio > 20);
console.log("Libros de prcio mayores a 20 dólares: ",librosCaros);

//listado de libros del autor J.R.R. Tolkien
const librosautor = Libros.filter((libro) => libro.autor === "J.R.R. Tolkien");
console.log("Libros del autor J.R.R. Tolkien: ",librosautor);

//listado de libros del autor empice con la letra j
const librosautor2 = Libros.filter((libro) => libro.autor.startsWith("L"));
console.log("Libros del autor empice con la letra l: ",librosautor2);

//listado de libros cuyo precio sea menor o igual que 15 dólares
const librosBaratos = Libros.filter((libro) => libro.precio <= 15);
console.log("Libros de precio menor o igual a 15 dólares: ",librosBaratos);