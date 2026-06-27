// Base de datos de estudiantes

const estudiantes = [
    {nombre:"Mariana", apellido:"Cordero", edad:13, curso:"8A", artes:4.5},
    {nombre:"Adrian", apellido:"Rosas", edad:14, curso:"8A", artes:4.0},
    {nombre:"Jimena", apellido:"Pizano", edad:13, curso:"8A", artes:4.8},
    {nombre:"Pablo", apellido:"Ríos", edad:13, curso:"8A", artes:3.9},

    {nombre:"Laura", apellido:"Gómez", edad:13, curso:"8B", artes:4.2},
    {nombre:"Carlos", apellido:"Pérez", edad:13, curso:"8B", artes:3.8},
    {nombre:"Valeria", apellido:"Aranda", edad:13, curso:"8B", artes:4.7},
    {nombre:"Mateo", apellido:"Ruiz", edad:14, curso:"8B", artes:4.4},

    {nombre:"Sofía", apellido:"Martínez", edad:14, curso:"8C", artes:4.9},
    {nombre:"Juan", apellido:"Castro", edad:13, curso:"8C", artes:3.7},
    {nombre:"Camila", apellido:"Torres", edad:15, curso:"8C", artes:4.6},
    {nombre:"Diego", apellido:"Morales", edad:14, curso:"8C", artes:4.1}
];

// =============================
// CURSO 8A
// =============================

const curso8A = estudiantes.filter(est => est.curso === "8A");
console.log(curso8A);

const edades8A = curso8A.map(est => est.edad);
console.log(edades8A);

const sumaEdades8A = edades8A.reduce((acum, edad) => acum + edad, 0);
console.log("La suma de las edades del curso 8A es: " + sumaEdades8A);

// Promedio Artes 8A
const notas8A = curso8A.map(est => est.artes);
const sumaNotas8A = notas8A.reduce((acum, nota) => acum + nota, 0);
const promedio8A = sumaNotas8A / notas8A.length;

console.log("El promedio de Artes del curso 8A es: " + promedio8A.toFixed(2));


// =============================
// CURSO 8B
// =============================

const curso8B = estudiantes.filter(est => est.curso === "8B");
console.log(curso8B);

const edades8B = curso8B.map(est => est.edad);
console.log(edades8B);

const sumaEdades8B = edades8B.reduce((acum, edad) => acum + edad, 0);
console.log("La suma de las edades del curso 8B es: " + sumaEdades8B);

// Promedio Artes 8B
const notas8B = curso8B.map(est => est.artes);
const sumaNotas8B = notas8B.reduce((acum, nota) => acum + nota, 0);
const promedio8B = sumaNotas8B / notas8B.length;

console.log("El promedio de Artes del curso 8B es: " + promedio8B.toFixed(2));


// =============================
// CURSO 8C
// =============================

const curso8C = estudiantes.filter(est => est.curso === "8C");
console.log(curso8C);

// Promedio Artes 8C
const notas8C = curso8C.map(est => est.artes);
const sumaNotas8C = notas8C.reduce((acum, nota) => acum + nota, 0);
const promedio8C = sumaNotas8C / notas8C.length;

console.log("El promedio de Artes del curso 8C es: " + promedio8C.toFixed(2));