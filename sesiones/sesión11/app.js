// ======================================
// BASE DE DATOS
// ======================================

const estudiantes = [

  {
    nombre: "Juan",
    apellido: "Pérez",
    direccion: "Calle 10",
    telefono: "3001111111",
    correo: "juan@gmail.com",
    ciudad: "Bogotá",
    edad: 14,
    curso: "8A"
  },

  {
    nombre: "María",
    apellido: "Gómez",
    direccion: "Carrera 20",
    telefono: "3002222222",
    correo: "maria@gmail.com",
    ciudad: "Medellín",
    edad: 15,
    curso: "8B"
  },

  {
    nombre: "Carlos",
    apellido: "Ramírez",
    direccion: "Calle 30",
    telefono: "3003333333",
    correo: "carlos@gmail.com",
    ciudad: "Bogotá",
    edad: 14,
    curso: "8C"
  },

  {
    nombre: "Laura",
    apellido: "Martínez",
    direccion: "Carrera 15",
    telefono: "3004444444",
    correo: "laura@gmail.com",
    ciudad: "Cali",
    edad: 13,
    curso: "8A"
  }

];


// ======================================
// REFERENCIA HTML
// ======================================

const resultado = document.getElementById("resultado");


// ======================================
// FILTRAR 8A
// ======================================

const grupo8A = estudiantes.filter(estudiante => estudiante.curso === "8A");

console.log("GRUPO 8A");
console.log(grupo8A);

resultado.innerHTML += "<h2>Grupo 8A</h2>";

grupo8A.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " " + estudiante.apellido + "<br>";
});


// ======================================
// FILTRAR 8B
// ======================================

const grupo8B = estudiantes.filter(estudiante => estudiante.curso === "8B");

console.log("GRUPO 8B");
console.log(grupo8B);

resultado.innerHTML += "<h2>Grupo 8B</h2>";

grupo8B.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " " + estudiante.apellido + "<br>";
});


// ======================================
// FILTRAR 8C
// ======================================

const grupo8C = estudiantes.filter(estudiante => estudiante.curso === "8C");

console.log("GRUPO 8C");
console.log(grupo8C);

resultado.innerHTML += "<h2>Grupo 8C</h2>";

grupo8C.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " " + estudiante.apellido + "<br>";
});


// ======================================
// FILTRAR MISMA EDAD
// ======================================

const mismaEdad = estudiantes.filter(estudiante => estudiante.edad === 14);

console.log("MISMA EDAD");
console.log(mismaEdad);

resultado.innerHTML += "<h2>Estudiantes de 14 años</h2>";

mismaEdad.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + "<br>";
});


// ======================================
// FILTRAR BOGOTÁ
// ======================================

const bogota = estudiantes.filter(estudiante => estudiante.ciudad === "Bogotá");

console.log("BOGOTÁ");
console.log(bogota);

resultado.innerHTML += "<h2>Estudiantes de Bogotá</h2>";

bogota.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + "<br>";
});