// ======================================
// 1. OBJETO CELULAR (OBJETO LITERAL)
// ======================================

// Pedir datos al usuario
let marca = prompt("Ingrese la marca del celular:");
let modelo = prompt("Ingrese el modelo:");
let almacenamiento = prompt("Ingrese el almacenamiento:");
let color = prompt("Ingrese el color:");
let precio = prompt("Ingrese el precio:");

// Crear objeto literal
const celular = {
  marca: marca,             // 1
  modelo: modelo,           // 2
  almacenamiento: almacenamiento, // 3
  color: color,             // 4
  precio: precio            // 5
};

// Mostrar en pantalla
document.write("<h2>Celular Favorito</h2>");
document.write("Marca: " + celular.marca + "<br>");
document.write("Almacenamiento: " + celular.almacenamiento + "<br>");
document.write("Precio: " + celular["precio"] + "<br><br>");


// ======================================
// 2. OBJETO PRENDA (MULTILÍNEA)
// ======================================

// Pedir datos
let tipo = prompt("Ingrese tipo de prenda:");
let talla = prompt("Ingrese talla:");
let colorPrenda = prompt("Ingrese color:");
let material = prompt("Ingrese material:");
let marcaPrenda = prompt("Ingrese marca de la prenda:");

// Objeto en múltiples líneas
const prenda = {
  tipo: tipo,        // 1
  talla: talla,      // 2
  color: colorPrenda,
  material: material,
  marca: marcaPrenda // 5
};

// Mostrar
document.write("<h2>Prenda de Vestir</h2>");
document.write("Marca: " + prenda.marca + "<br>");
document.write("Tipo: " + prenda.tipo + "<br>");
document.write("Talla: " + prenda["talla"] + "<br><br>");


// ======================================
// 3. OBJETO PERSONA (OBJETO GENÉRICO)
// ======================================

// Pedir datos
let nombre = prompt("Ingrese nombre:");
let edad = prompt("Ingrese edad:");
let ciudad = prompt("Ingrese ciudad:");
let profesion = prompt("Ingrese profesión:");
let telefono = prompt("Ingrese teléfono:");

// Objeto genérico
const persona = new Object();

persona.nombre = nombre;
persona.edad = edad;
persona.ciudad = ciudad;
persona.profesion = profesion;
persona.telefono = telefono;

// Mostrar
document.write("<h2>Persona</h2>");
document.write("Nombre: " + persona.nombre + "<br>");
document.write("Edad: " + persona.edad + "<br>");
document.write("Profesión: " + persona["profesion"] + "<br>");