// ======================================
// BASE DE DATOS
// ======================================

const estudiantes = [

  {
    nombre: "Valeria",
    apellido: "Aranda",
    estatura: 1.64,
    peso: 55.1,
    tecnC: 4.8
  },

  {
    nombre: "Tyler",
    apellido: "Franco",
    estatura: 1.66,
    peso: 59,
    tecnC: 4.5
  },

  {
    nombre: "Adrian",
    apellido: "Rosas",
    estatura: 1.58,
    peso: 50,
    tecnC: 4.0
  },

  {
    nombre: "Laura",
    apellido: "Gomez",
    estatura: 1.70,
    peso: 53,
    tecnC: 4.7
  },

  {
    nombre: "Camilo",
    apellido: "Ruiz",
    estatura: 1.62,
    peso: 54,
    tecnC: 3.9
  },

  {
    nombre: "Sofia",
    apellido: "Martinez",
    estatura: 1.55,
    peso: 49,
    tecnC: 4.6
  }

];


// ======================================
// REFERENCIA HTML
// ======================================

const resultado = document.getElementById("resultado");


// ======================================
// FILTRAR ESTATURA MAYOR A 1.60
// ======================================

const estaturaMayor = estudiantes.filter(
  estudiante => estudiante.estatura > 1.60
);

console.log("ESTATURA MAYOR A 1.60");
console.log(estaturaMayor);

resultado.innerHTML += "<h2>Estudiantes con estatura mayor a 1.60</h2>";

estaturaMayor.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " - " + estudiante.estatura + " m<br>";
});


// ======================================
// FILTRAR PESO MENOR O IGUAL A 54
// ======================================

const pesoMenor = estudiantes.filter(
  estudiante => estudiante.peso <= 54
);

console.log("PESO MENOR O IGUAL A 54");
console.log(pesoMenor);

resultado.innerHTML += "<h2>Estudiantes con peso menor o igual a 54 Kg</h2>";

pesoMenor.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " - " + estudiante.peso + " Kg<br>";
});


// ======================================
// MOSTRAR CALIFICACIONES
// ======================================

const calificaciones = estudiantes.map(
  estudiante => estudiante.tecnC
);

console.log("CALIFICACIONES");
console.log(calificaciones);

resultado.innerHTML += "<h2>Calificaciones de Tecnología</h2>";

calificaciones.forEach(nota => {
  resultado.innerHTML += nota + "<br>";
});


// ======================================
// SUMAR 0.2 A LAS NOTAS
// ======================================

const nuevasNotas = estudiantes.map(estudiante => ({
  nombre: estudiante.nombre,
  nuevaNota: estudiante.tecnC + 0.2
}));

console.log("NUEVAS NOTAS");
console.log(nuevasNotas);

resultado.innerHTML += "<h2>Nuevas Calificaciones</h2>";

nuevasNotas.forEach(estudiante => {
  resultado.innerHTML += estudiante.nombre + " - " + estudiante.nuevaNota + "<br>";
});